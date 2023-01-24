import * as React from "react";
import Seconds from "./Seconds";
import Lives from "./Lives";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import Points from "./Points";
import { Box } from "@mui/material";

function gameInfo() {
  return (
    <>
      <Container
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flex: "1", justifyContent: "flex-start" }}>
          <Seconds></Seconds>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Points></Points>
        </Box>
        <Box sx={{ display: "flex", flex: "1", justifyContent: "flex-end" }}>
          <Lives></Lives>
        </Box>
      </Container>
    </>
  );
}

export default gameInfo;
