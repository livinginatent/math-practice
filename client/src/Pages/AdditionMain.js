import { TextField, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useState, useMemo } from "react";

const AdditionMain = () => {
  const [sum, setSum] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const randomNum1 = () => {
    let number1 = Math.floor(Math.random() * 50);

    return number1;
  };
  const randomNum2 = () => {
    let number2 = Math.floor(Math.random() * 50);
    return number2;
  };
  const number1 = useMemo(() => randomNum1(), []);
  const number2 = useMemo(() => randomNum2(), []);
  const result = number1 + number2;

  const correctAnswer = <Typography>Correct!</Typography>;
  const wrongAnswer = <Typography>Wrong!</Typography>;
  const enterAnswer = <Typography>Enter your answer!</Typography>;

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (sum === result) {
      setDisabled(!disabled);
    } 
  };

  return (
    <>
      <Navbar />
      <Card
        sx={{
          marginTop: 2,
          height: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography></Typography>
      </Card>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Fill in the box to make the equation true.</Typography>
          <Typography fontSize={28}>
            {number1} + {number2} =
          </Typography>

          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => setSum(parseInt(e.target.value))}
            disabled={disabled}
            type="number"
            value={sum}
            name="sum"
            id="outlined-basic"
            label=""
            variant="outlined"
          ></TextField>

          {!isSubmit ? (
            <Button
              type="button"
              onClick={onSubmit}
              sx={{ marginTop: 1 }}
              variant="outlined"
            >
              Submit
            </Button>
          ) : isSubmit && sum === "" ? (
            <Button
              type="button"
              onClick={onSubmit}
              sx={{ marginTop: 1 }}
              variant="outlined"
            >
              Submit
            </Button>
          ) : isSubmit && sum !== result ? (
            <Button
              type="button"
              onClick={onSubmit}
              sx={{ marginTop: 1 }}
              variant="outlined"
            >
              Try again!
            </Button>
          ) : (
            () => {}
          )}

          {isSubmit && sum === ""
            ? enterAnswer
            : isSubmit && sum !== result
            ? wrongAnswer
            : isSubmit && sum === result
            ? correctAnswer
            : ""}
          {isSubmit && sum === result ? <Button>Try new one</Button> : () => {}}
        </Box>
      </Container>
    </>
  );
};

export default AdditionMain;
