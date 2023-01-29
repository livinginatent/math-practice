import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function Dashboard() {

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDQyYTc2ZjZjOGE0NzU4Y2I5YzQ5YiIsImlhdCI6MTY3NDg0ODg4NiwiZXhwIjoxNjc3NDQwODg2fQ.OhC9IUnykyq4dSsMg2hYFdoJ8eST6lPoyTnmCQzAQ-I";
    const updateScore = async (highestScore, token) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const body = JSON.stringify({ highestScore });

        const res = await axios.patch(
          "http://localhost:5000/users/updatestats",
          body,
          config
        );
        console.log(res.data.userStats)
        return res.data;
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(()=>{
        updateScore(10000,token)
    })
  return (
    <>
    <div>Dashboard</div>
    
    </>
  )
}

export default Dashboard