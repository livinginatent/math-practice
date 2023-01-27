import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userStatsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateUserStats: (state, action) => {
      state.user.userStats.totalGamesPlayed = action.payload.totalGamesPlayed;
      state.user.userStats.highestScore = action.payload.highestScore;
    },
  },
});

export const { setUser, setLoading, setError, updateUserStats } =
  userStatsSlice.actions;

export const updateUserStatsAsync =
  (token, totalGamesPlayed, highestScore) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.patch(`/users/updatestats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          totalGamesPlayed,
          highestScore,
        },
      });
      dispatch(updateUserStats(res.data));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    }
  };

export default userStatsSlice.reducer;
