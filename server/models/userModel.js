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
    userRank:{
      type: Number,
      default:0
    },
    userStats: 
      {
        totalGamesPlayed: {
          type: Number,
          default: 0,
        },
        totalScore:{
          type:Number,
          default:0
        },
        totalAdditionPlayed: {
          type: Number,
          default: 0,
        },
        totalSubtractionPlayed: {
          type: Number,
          default: 0,
        },
        totalMultiplicationPlayed: {
          type: Number,
          default: 0,
        },
        totalDivisionPlayed: {
          type: Number,
          default: 0,
        },
        totalOrderedPlayed: {
          type: Number,
          default: 0,
        },
        highestAdditionScore: {
          type: Number,
          default: 0,
        },
        highestSubtractionScore: {
          type: Number,
          default: 0,
        },
        highestMultiplicationScore: {
          type: Number,
          default: 0,
        },
        highestDivisionScore: {
          type: Number,
          default: 0,
        },
        highestOrderedScore: {
          type: Number,
          default: 0,
        },
      },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
