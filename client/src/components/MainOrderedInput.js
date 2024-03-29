import { Divider, List, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { updateScore } from "../statsHandler";
import GameInfo from "./GameInfo";
import { useSelector, useDispatch } from "react-redux";

import {
  earnLife,
  gainPoints,
  gainTime,
  isFinished,
  loseLife,
  loseTime,
  restart,
} from "../features/gameSlice";
import { useNavigate } from "react-router";

const correctAnswer = <Typography>Correct!</Typography>;
const wrongAnswer = <Typography>Wrong!</Typography>;
const enterAnswer = <Typography>Enter your answer!</Typography>;

const MainOrderedInput = ({ calculation }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [correctValue, setCorrectValue] = useState(false);
  const [calculatedNums, setCalculatedNums] = useState({});
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [generateNewNumbers, setGenerateNewNumbers] = useState(false);
  const [haveToEnterAnswer, setHaveToEnterAnswer] = useState(false);
  const [streak, setStreak] = useState(0);

  const seconds = useSelector((state) => state.game.seconds);
  const points = useSelector((state) => state.game.points);
  const lives = useSelector((state) => state.game.lives);
  const gameOver = useSelector((state) => state.game.isFinished);
  const gameStart = useSelector((state) => state.game.isStarted);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const operation = "ordered";
  let finalScore = points;

  const navigate = useNavigate();

  // FIX THE UNDEFINED ISSUE

  // FIX THE UNDEFINED ISSUE

  // FIX THE UNDEFINED ISSUE

 useEffect(() => {
   if (gameOver) {
     updateScore(finalScore, operation, token);
   }
 }, [gameOver]);

  useEffect(() => {
    if (correctValue && streak === 4 && lives < 4) {
      dispatch(earnLife());
      setStreak(0);
    }
  }, [streak]);

  useEffect(() => {
    console.log(calculatedNums.expression);
    setCalculatedNums(calculation());
    setGenerateNewNumbers(false);
    setCorrectValue(false);
    setEnteredValue("");
  }, [generateNewNumbers]);

  const dispatch = useDispatch();

  const timerValid = lives > 0 && seconds > 0 && gameStart;

  const newChallenge = () => {
    setIsIncorrect(false);
    setHaveToEnterAnswer(false);
    dispatch(restart());
  };

  const handleCount = () => {
    if (timerValid) {
      dispatch(loseTime());
    }
  };

  useEffect(() => {
    if (lives === 0 || seconds === 0) {
      dispatch(isFinished());
    }
  }, [dispatch, lives, seconds]);

  useEffect(() => {
    let interval;
    if (timerValid) {
      interval = setInterval(() => {
        handleCount();
        if (lives === 0 || seconds === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerValid]);

  const submitHandler = () => {
    if (correctValue) {
      setGenerateNewNumbers(true);
      dispatch(gainPoints());
      dispatch(gainTime());
      setStreak(streak + 1);
    }

    if (+enteredValue === calculatedNums.result) {
      setCorrectValue(true);
    } else if (enteredValue.length === 0) {
      setHaveToEnterAnswer(true);
    } else {
      setIsIncorrect(true);
      dispatch(loseLife());
      setStreak(0);
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

   const goHome = () => {
     navigate("/");
     dispatch(restart());
   };

  return (
    <>
      <Navbar />

      {seconds && lives > 0 ? (
        <>
          <GameInfo></GameInfo>
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
                {`${calculatedNums.expression}`}=
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
                disabled={correctValue}
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
            </Box>
          </Container>
        </>
      ) : (
        <>
          <List
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontSize={28}>GAME OVER</Typography>
            <Divider></Divider>
            <Typography sx={{ marginTop: 2 }} fontSize={28}>
              Final Score: {points}
            </Typography>
            <Divider></Divider>
            <Button
              sx={{ marginTop: 2 }}
              variant="contained"
              size="large"
              onClick={newChallenge}
            >
              New Challenge
            </Button>
            <Button
              sx={{ marginTop: 2 }}
              variant="contained"
              size="large"
              onClick={goHome}
            >
              Home Page
            </Button>
          </List>
        </>
      )}
    </>
  );
};

export default MainOrderedInput;
