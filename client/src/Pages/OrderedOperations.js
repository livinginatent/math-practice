import React from "react";
import { useSelector } from "react-redux";
import Beginning from "../components/Beginning";
import { Container } from "@mui/system";
import MainOrderedInput from "../components/MainOrderedInput";
import { generateExpression } from "../MainOrdered";

const OrderedMain = () => {
  const gameStart = useSelector((state) => state.game.isStarted);

  const calculation = generateExpression;

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
      <MainOrderedInput calculation={calculation} />
    </>
  );
};

export default OrderedMain;
