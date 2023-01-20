import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { start, restart } from "../features/gameSlice";
import { useNavigationType, NavigationType } from "react-router-dom";


function Beginning() {
  const [count, setCount] = useState(3);
  const [message, setMessage] = useState("");
  const navigationType = useNavigationType();
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
        if (navigationType === NavigationType.Pop) {
          dispatch(restart());
        }
    }
    return () => clearInterval(interval);
  }, [count, message, navigationType]);

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
