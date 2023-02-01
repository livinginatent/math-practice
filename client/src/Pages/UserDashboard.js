import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DashCharts from "../components/dashboardComponents/DashCharts";
import DashNav from "../components/dashboardComponents/DashNav";


function UserDashboard() {

  
  return (
    <>
    <DashNav/>
    <DashCharts/>
    </>
    
  );
}

export default UserDashboard;
