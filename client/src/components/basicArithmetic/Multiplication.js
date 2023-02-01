import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PracticeButton from '../PracticeButton';
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';


const Multiplication = () => {
 const { user } = useSelector((state) => state.auth);
 const arithName = "Multiplication";
 const navigate = useNavigate();
 const handleClick = () => {
   if (user) {
     navigate("multiplication-practice");
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
            image="https://www.playosmo.com/kids-learning/wp-content/uploads/2021/05/Basic-multiplication-worksheets-1.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Multiplication
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Multiplication is an operation that represents the basic idea of
              repeated addition of the same number.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PracticeButton onClick={handleClick} arithName={arithName} />
    </div>
  );
}

export default Multiplication