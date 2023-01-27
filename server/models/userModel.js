import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
    },

    email: {
      type: String,
      required: [true, "Please add your email"],
    },

    password: {
      type: String,
      required: [true, "Please add your password"],
    },
    userStats: 
      {
        totalGamesPlayed: {
          type: Number,
          default: 0,
        },
        highestScore: {
          type: Number,
          default: 0,
        },
      },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
