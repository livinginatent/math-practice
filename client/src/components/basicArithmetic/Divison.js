import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PracticeButton from "../PracticeButton";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Division = () => {
  const { user } = useSelector((state) => state.auth);
  const arithName = "Division";
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      navigate("division-practice");
    } else {
      navigate("register");
    }
  };
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.ytimg.com/vi/BFhUXNoRpQE/maxresdefault.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Division
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The process of dividing a number up into equal parts, and finding
              how many equal parts can be made.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PracticeButton onClick={handleClick} arithName={arithName} />
    </div>
  );
};

export default Division;
