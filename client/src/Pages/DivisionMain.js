import React from "react";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import Beginning from "../components/Beginning";

const DivisionMain = () => {
  const startGame = useSelector((state) => state.game.startGame);
  const operation = "/";
  const calculation = generateNumbersAndResults().division;

  if (!startGame) {
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
};;

export default DivisionMain;
