import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import e from "express";

// Register new user

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists =
    (await User.findOne({ email })) && (await User.findOne({ username }));

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
    userStats: { totalGamesPlayed: 0, finalScore: 0 },
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      userStats: user.userStats,
      joinDate: user.createdAt,
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
      username: user.username,
      email: user.email,
      joinDate: user.createdAt,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Update user

export const updateUser = asyncHandler(async (req, res) => {
  const { newUsername, newEmail, newPassword } = req.body;

  // Extract token from headers
  const token = req.headers.authorization.split(" ")[1];

  // Find the user by token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // Find user by id
  const user = await User.findOne({ _id: decoded.id });

  // Check if email or username already exists
  const emailExists = await User.findOne({
    email: req.body.newEmail,
  });
  const usernameExists = await User.findOne({
    username: req.body.newUsername,
  });

  if (emailExists || usernameExists) {
    res.status(400);
    throw new Error("This email or username is already registered");
  }

  // Update username and email
  if (newUsername) user.username = newUsername;
  if (newEmail) user.email = newEmail;

  // Hash password
  if (newPassword) {
    if (await bcrypt.compare(newPassword, user.password)) {
      res.status(400);
      throw new Error("New password can't be the current password");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
    }
  }

  const updatedUser = await user.save();

  if (updatedUser) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      joinDate: user.createdAt,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
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

  // Determine which arithmetic operation

  const operation = req.body.operation;

  if (!user) {
    return res.status(404).send("User not found");
  }

  user.userStats.totalGamesPlayed++;
  user.userStats.totalScore += req.body.finalScore;

  if (operation === "+") {
    user.userStats.totalAdditionPlayed++;
    user.userStats.totalAdditionScore += req.body.finalScore;
    user.userStats.highestAdditionScore = Math.max(
      user.userStats.highestAdditionScore,
      req.body.finalScore
    );
  } else if (operation === "-") {
    user.userStats.totalSubtractionPlayed++;
    user.userStats.totalSubtractionScore += req.body.finalScore;
    user.userStats.highestSubtractionScore = Math.max(
      user.userStats.highestSubtractionScore,
      req.body.finalScore
    );
  } else if (operation === "*") {
    user.userStats.totalMultiplicationPlayed++;
    user.userStats.totalMultiplicationScore += req.body.finalScore;
    user.userStats.highestMultiplicationScore = Math.max(
      user.userStats.highestMultiplicationScore,
      req.body.finalScore
    );
  } else if (operation === "/") {
    user.userStats.totalDivisionPlayed++;
    user.userStats.totalDivisionScore += req.body.finalScore;
    user.userStats.highestDivisionScore = Math.max(
      user.userStats.highestDivisionScore,
      req.body.finalScore
    );
  } else {
    user.userStats.totalOrderedPlayed++;
    user.userStats.totalOrderedScore += req.body.finalScore;
    user.userStats.highestOrderedScore = Math.max(
      user.userStats.highestOrderedScore,
      req.body.finalScore
    );
  }

  // Save the updated user
  const updatedUserStats = await User.findByIdAndUpdate(
    { _id: decoded.id },
    { $set: { userStats: user.userStats } },
    { new: true }
  );

  if (updatedUserStats) {
    res.json(updatedUserStats);
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user.userStats);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
