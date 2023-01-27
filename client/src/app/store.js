import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import gameReducer from "../features/gameSlice";
import statsReducer from "../features/userStatsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    game:gameReducer,
    stats:statsReducer
  },
});
