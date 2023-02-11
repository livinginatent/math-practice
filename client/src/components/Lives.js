import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Lives() {
  const lives = useSelector((state) => state.game.lives);

  let hearts = [];

  if (lives < 5) {
    for (let i = 0; i < lives; i++) {
      hearts.push(<FavoriteIcon fontSize="large" key={i} />);
    }
  } else {
    hearts.push(<FavoriteIcon size="large" key={lives} />);
  }

  return (
  
      <Box>
        <span data-testid="hearts-state">{hearts}</span>
      </Box>
    
  );
}

export default Lives;
