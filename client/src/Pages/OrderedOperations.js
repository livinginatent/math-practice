import React from "react";
import { useSelector } from "react-redux";
import Beginning from "../components/Beginning";
import { Container } from "@mui/system";
import MainOrderedInput from "../components/MainOrderedInput";
import { generateExpression } from "../MainOrdered";

const OrderedMain = () => {
  const startGame = useSelector((state) => state.game.startGame);

  const calculation = generateExpression;

  if (!startGame) {
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
