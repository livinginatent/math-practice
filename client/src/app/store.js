import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import livesReducer from "../features/gameSlice";
import gameReducer from "../features/gameSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    game:gameReducer,
  },
});
