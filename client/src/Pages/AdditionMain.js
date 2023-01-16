import React from "react";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";

const AdditionMain = () => {
  const operation = "+";
  const calculation = generateNumbersAndResults().addition;

  return (
    <>
      <MainInput operation={operation} calculation={calculation} />
    </>
  );
};

export default AdditionMain;
