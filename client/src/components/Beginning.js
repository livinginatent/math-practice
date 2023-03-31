import { Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGame, start } from "../features/gameSlice";

function Beginning() {
  const [count, setCount] = useState(3);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const handleCount = () => {
    if (countRef.current === 1) {
      return setMessage("GO");
    }

    return setCount((count) => count - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleCount();
    }, 1000);

    if (message === "GO") {
      setTimeout(() => {
        dispatch(startGame());
        dispatch(start());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [count, message]);

  return (
    <>
      <Typography variant="h1" fontStyle={"Poppins"} fontSize={36}>
        GET READY...
      </Typography>

      <Typography fontSize={48}>{count}</Typography>
      <Typography fontSize={60}>
        <span data-testid="go-message">{message}</span>
      </Typography>
    </>
  );
}

export default Beginning;
