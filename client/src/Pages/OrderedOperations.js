import React from "react";
import MainInput from "../components/MainInput";


import { useSelector } from "react-redux";
import Beginning from "../components/Beginning";
import { Container } from "@mui/system";

import MainOrderedInput from "../components/MainOrderedInput";
import { generateOrderedOperationsAndResults } from "../MainOrdered";

const OrderedMain = () => {
  const gameStart = useSelector((state) => state.game.isStarted);
  
  const calculation =
    generateOrderedOperationsAndResults().randomOperationAndResult

  if (!gameStart) {
    return (
      <>
      {console.log(calculation)}
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
      <MainOrderedInput  calculation={calculation} />
    </>
  );
};

export default OrderedMain;
