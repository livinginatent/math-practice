import express from "express";
import { getMe, loginUser, registerUser, updateUserStats } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();



router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updatestats", updateUserStats);
router.get("/me",protect, getMe);
 
export default router;
