import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

connectDB()

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));