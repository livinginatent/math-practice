import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PracticeButton from "../PracticeButton";
import { useNavigate } from "react-router";

const Addition = () => {
  const arithName = "Addition";
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("addition-practice");
  };
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.whizz.com/wp-content/uploads/Teaching-addition-top-image2.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Addition
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Addition is bringing two or more numbers (or things) together to
              make a new total.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PracticeButton
        onClick={handleClick}
        arithName={arithName}
      ></PracticeButton>
    </div>
  );
};

export default Addition;
