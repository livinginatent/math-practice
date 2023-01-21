import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { start } from "../features/gameSlice";

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
        dispatch(start());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [count, message]);

  return (
    <>
      <div>
        <h3>GET READY...</h3>

        <h1>{count}</h1>
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default Beginning;
