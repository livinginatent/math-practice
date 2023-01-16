import React from "react";
import MainInput from "../components/MainInput";
import { generateNumbersAndResults } from "../MainArithmetics";

const DivisionMain = () => {
  const operation = "/";
  const calculation = generateNumbersAndResults().division;

  return (
    <>
      <MainInput operation={operation} calculation={calculation} />
    </>
  );
};

export default DivisionMain;
