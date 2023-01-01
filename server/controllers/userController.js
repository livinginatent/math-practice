import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

// Register new user

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    // Check if all fields are added
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
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Create user
    const user = await  User.create({
      username,
      email,
      password: hashedPassword,
    });

    if(user){
      res.status(201).json({
        _id:user.id,
        name:user.name,
        email:user.email
      })
    } else{
      res.status(400)
      throw new Error('Invalid user data')
    }

   
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};


// Login User

