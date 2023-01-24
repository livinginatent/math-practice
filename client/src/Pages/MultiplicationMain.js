import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Beginning from "../components/Beginning";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";

const MultiplicationMain = () => {
  const gameStart = useSelector((state) => state.game.isStarted);
  const operation = "*";
  const calculation = generateNumbersAndResults().multiplication;

  if (!gameStart) {
    return (
      <>
        <Container
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Beginning />
        </Container>
      </>
    );
  }
  return (
    <>
      <MainInput operation={operation} calculation={calculation} />
    </>
  );
};

export default MultiplicationMain;
