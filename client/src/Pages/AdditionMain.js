import React, { useEffect } from "react";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";
import { useNavigationType, NavigationType } from "react-router-dom";

const AdditionMain = () => {
  const operation = "+";
    const navigationType = useNavigationType();


  const calculation = generateNumbersAndResults().addition;
 

  return (
    <>
    
      <MainInput operation={operation} calculation={calculation} />
    </>
  );
};

export default AdditionMain;
