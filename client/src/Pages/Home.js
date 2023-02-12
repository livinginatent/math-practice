import React from "react";
import Addition from "../components/basicArithmetic/Addition";
import Division from "../components/basicArithmetic/Divison";
import Multiplication from "../components/basicArithmetic/Multiplication";
import Subtraction from "../components/basicArithmetic/Subtraction";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import {
 
  useNavigationType,
  NavigationType,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { restart } from "../features/gameSlice";
import OrderedOperations from "../components/orderOfOperations/orderedOperations";

const Home = () => {
  const navigationType = useNavigationType();
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigationType === NavigationType.Pop) {
      dispatch(restart());
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="arithmetics">
        
        <Addition />
        <Subtraction />
        <Multiplication />
        <Division />
        <OrderedOperations />
          
        
      </div>
    </>
  );
};

export default Home;
