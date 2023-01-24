import { Box, Typography } from "@mui/material";
import React from "react";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { useSelector } from "react-redux";
import TimerIcon from "@mui/icons-material/Timer";


function Points() {
  const points = useSelector((state) => state.game.points);

  return (
    <>
      <Typography fontSize={36}>
        <SportsScoreIcon /> {points}
      </Typography>
    </>
  );
}

export default Points;
