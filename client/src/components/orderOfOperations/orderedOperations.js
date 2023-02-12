import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PracticeButton from "../PracticeButton";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const OrderedOperations = () => {
  const { user } = useSelector((state) => state.auth);
  const arithName = "Ordered Operations";
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      navigate("ordered-operation-practice");
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
            image="https://www.whizz.com/wp-content/uploads/Teaching-addition-top-image2.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ordered Operations
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The order of operations are the rules that tell us the sequence in
              which we should solve an expression with multiple operations. The
              order is PEMDAS: Parentheses, Exponents, Multiplication, and
              Division (from left to right), Addition and Subtraction (from left
              to right).
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

export default OrderedOperations;
