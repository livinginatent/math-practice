import { TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Beginning from "./Beginning";
import { useSelector, useDispatch } from "react-redux";
import Lives from "./Lives";
import { finish, gainPoints, gainTime, loseLife, loseTime, restart } from "../features/gameSlice";
import Seconds from "./Seconds";

const correctAnswer = <Typography>Correct!</Typography>;
const wrongAnswer = <Typography>Wrong!</Typography>;
const enterAnswer = <Typography>Enter your answer!</Typography>;

const MainInput = ({ operation, calculation }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [correctValue, setCorrectValue] = useState(false);
  const [calculatedNums, setCalculatedNums] = useState({});
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [generateNewNumbers, setGenerateNewNumbers] = useState(false);
  const [haveToEnterAnswer, setHaveToEnterAnswer] = useState(false);

  const dispatch = useDispatch();
  const gameStart = useSelector((state) => state.game.isStarted);
  const seconds = useSelector((state) => state.game.seconds);
  const points = useSelector((state) => state.game.points);
  const isFinished = useSelector((state) => state.game.isFinished);

  const newChallenge = () => {
    dispatch(restart())
  };

  const handleCount = () => {
    dispatch(loseTime());
  };

  useEffect(() => {
    let interval;
    if (seconds === 0) {
      dispatch(finish());
    }
    if (gameStart && seconds > 0) {
      interval = setInterval(() => {
        handleCount();
      }, 1000);
    }

    return function cleanUp() {
      clearInterval(interval);
    };
  }, [gameStart, seconds]);

  useEffect(() => {
    setCalculatedNums(calculation());
    setGenerateNewNumbers(false);
    setCorrectValue(false);
    setEnteredValue("");
  }, [generateNewNumbers]);

  const submitHandler = () => {
    if (correctValue) {
      setGenerateNewNumbers(true);
      dispatch(gainPoints())
      dispatch(gainTime())
    }

    if (+enteredValue === calculatedNums.result) {
      setCorrectValue(true);
    } else if (enteredValue.length === 0) {
      setHaveToEnterAnswer(true);
    } else {
      setIsIncorrect(true);
      dispatch(loseLife());
    }
  };

  const inputValueHandler = (value) => {
    setIsIncorrect(false);
    setHaveToEnterAnswer(false);
    setEnteredValue(value);
  };

  const submitOrTryNewOne = () => {
    return correctValue ? "Try new one" : "Submit";
  };

  return (
    <>
      <Navbar />

      {!gameStart ? (
        <Beginning />
      ) : gameStart && seconds > 0 ?(
        <>
          <Lives></Lives>
          <Seconds></Seconds>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>
                Fill in the box to make the equation true.
              </Typography>
              <Typography fontSize={28}>
                {operation !== "/"
                  ? `${calculatedNums.number1} ${operation} ${calculatedNums.number2}`
                  : `${calculatedNums.number2} ${operation} ${calculatedNums.number1}`}{" "}
                =
              </Typography>
              <TextField
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                name="sum"
                id="outlined-basic"
                label=""
                variant="outlined"
                onChange={(event) => {
                  inputValueHandler(event.target.value);
                }}
                disabled={correctValue && seconds === 0}
                value={enteredValue}
              ></TextField>
              {haveToEnterAnswer && enterAnswer}
              {correctValue && correctAnswer}
              {isIncorrect && wrongAnswer}

              <Button
                type="button"
                sx={{ marginTop: 1 }}
                onClick={() => submitHandler()}
                variant="outlined"
              >
                {isIncorrect ? "Try again!" : submitOrTryNewOne()}
              </Button>
              {/* {seconds===0 ? (<Button onClick={newChallenge} >You lost! New Challenge</Button>) : (()=>{})} */}
            </Box>
          </Container>
        </>
      ) : (
        <>
        <Typography>GAME OVER</Typography>
        <Typography>Final Score: {points}</Typography>
        <Button onClick={newChallenge} >New Challenge</Button>
        </>
      )}
    </>
  );
};

export default MainInput;
