import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";


function Lives() {
  const lives = useSelector((state) => state.lives.value);
  
  let hearts = [];

  if (lives < 5) {
    for (let i = 0; i < lives; i++) {
      hearts.push(<FavoriteIcon key={i} />);
    }
  } else {
    hearts.push(<FavoriteIcon key={lives} />);
  }
 

  return (
    <>
      <Box>{hearts}</Box>
    </>
  );
}

export default Lives;
