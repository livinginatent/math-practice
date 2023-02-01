import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PracticeButton from '../PracticeButton';
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';


const Subtraction = () => {
 const { user } = useSelector((state) => state.auth);
 const arithName = "Subtraction";
 const navigate = useNavigate();
 const handleClick = () => {
   if (user) {
     navigate("subtraction-practice");
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
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Subtraction.svg/2560px-Subtraction.svg.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Subtraction
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Subtraction is the process of taking away a number from another.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PracticeButton onClick={handleClick} arithName={arithName} />
    </div>
  );
}

export default Subtraction