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
  },
  { timestamps: true }
);


const User = mongoose.model('User', userSchema)

export default User