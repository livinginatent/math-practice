import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
    dotenv.config();
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log('DB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


