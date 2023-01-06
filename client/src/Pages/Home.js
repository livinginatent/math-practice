import React from "react";
import Addition from "../components/basicArithmetic/Addition";
import Division from "../components/basicArithmetic/Divison";
import Multiplication from "../components/basicArithmetic/Multiplication";
import Subtraction from "../components/basicArithmetic/Subtraction";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

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
