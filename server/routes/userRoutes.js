import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
  updateUser,
  updateUserStats,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { rankUp } from "../controllers/userRankController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updateuserstats", updateUserStats);
router.patch("/rankup", rankUp);
router.put("/updateuser", updateUser);
router.get("/me", protect, getMe);

export default router;
