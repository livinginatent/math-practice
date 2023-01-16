import React from "react";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";

const MultiplicationMain = () => {
  const operation = '*'
  const calculation = generateNumbersAndResults().multiplication

  return (
    <>
      <MainInput operation={operation} calculation={calculation} />
    </>
  );
};

export default MultiplicationMain;