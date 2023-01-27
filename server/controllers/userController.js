import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

// Register new user

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    username,
    email,
    userStats: { totalGamesPlayed: 0, highestScore: 0 },
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      userStats: user.userStats,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Update user stats

export const updateUserStats = asyncHandler(async (req, res) => {
  // Extract token from headers
  const token = req.headers.authorization.split(" ")[1];

  // Find the user by token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // Find user by id
  const user = await User.findOne({ _id: decoded.id });

  if (!user) {
    return res.status(404).send("User not found");
  }

  user.userStats.totalGamesPlayed++;
  
  user.userStats.highestScore = Math.max(
    user.userStats.highestScore,
    req.body.highestScore
  );

  // Save the updated user
  const updatedUser = await User.findByIdAndUpdate(
    { _id: decoded.id },
    { $set: { userStats: user.userStats } },
    {new:true}
  );

  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});


// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
