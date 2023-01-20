import { Button, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import { useState } from "react";

function FreeOrChallenge(props) {
   
  return (
    <>

      <Container component="main" maxWidth="xs" sx={{ textAlign: "center",
    marginTop:5, fontSize:28 }}>
        <Typography>{props.operName}</Typography>
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Button onClick={props.setIsFreePract(true)} variant="outlined">Free practice</Button>
          <Button variant="outlined">Timed Challenge</Button>
        </Box>
      </Container>
    </>
  );
}

export default FreeOrChallenge;
