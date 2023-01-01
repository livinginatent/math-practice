import React from "react";
import Addition from "../components/basicArithmetic/Addition";
import Division from "../components/basicArithmetic/Divison";
import Multiplication from "../components/basicArithmetic/Multiplication";
import Subtraction from "../components/basicArithmetic/Subtraction";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="arithmetics">
        <Addition />
        <Subtraction />
        <Multiplication />
        <Division />
      </div>
    </>
  );
};

export default Home;
