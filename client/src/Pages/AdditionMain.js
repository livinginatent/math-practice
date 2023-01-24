import React, { useEffect } from "react";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";
import { useNavigationType, NavigationType } from "react-router-dom";
import { useSelector } from "react-redux";
import Beginning from "../components/Beginning";
import { Container } from "@mui/system";

const AdditionMain = () => {
  const gameStart = useSelector((state) => state.game.isStarted);
  const operation = "+";
  const calculation = generateNumbersAndResults().addition;


  if (!gameStart){
    
    return (
      <>
        <Container
          sx={{
            marginTop:8,
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

export default AdditionMain;
