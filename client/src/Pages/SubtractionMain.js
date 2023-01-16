import React from "react";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";

const SubtractionMain = () => {
  const operation = "-";
  const calculation = generateNumbersAndResults().subtraction;

  return (
    <>
      <MainInput operation={operation} calculation={calculation} />
    </>
  );
};

export default SubtractionMain;
