import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

export const rankUp = asyncHandler(async (req, res) => {
  // Extract token from headers
  const token = req.headers.authorization.split(" ")[1];

  // Find the user by token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // Find user by id
  const user = await User.findOne({ _id: decoded.id });

  if (!user) {
    return res.status(404).send("User not found");
  }

  if (
    user.userStats.totalScore === 5000 &&
    user.userStats.totalAdditionScore >= 1000 &&
    user.userStats.totalAdditionScore >= 1000 &&
    user.userStats.totalSubtractionScore >= 1000 &&
    user.userStats.totalMultiplicationScore >= 1000 &&
    user.userStats.totalOrderedScore >= 1000
  ) {
    user.userRank = 1
  }else{
    console.log('conditions not met')
  }

  // Save the updated user
  const updatedUserRank = await User.findByIdAndUpdate(
    { _id: decoded.id },
    { $set: { userRank:user.userRank } },
    { new: true }
  );

  if (updatedUserRank) {
    res.json(updatedUserRank);
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});
