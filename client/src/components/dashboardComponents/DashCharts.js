import React from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";
import { useState } from "react";

import Chart from "chart.js/auto";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
Chart.register();

function DashCharts() {
  const [totalGamesPlayed, setTotalGamesPlayed] = useState({});
  const [gameScore, setGameScore] = useState({});
  const [totalScore, setTotalScore] = useState({});
  useEffect(() => {
    const getUserStats = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user.token;
        const res = await axios.get("http://localhost:5000/users/me", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(res.data);

        setTotalGamesPlayed({
          labels: [
            "Total Games Played",
            "Total Addition Played",
            "Total Subtraction Played",
            "Total Multiplication Played",
            "Total Division Played",
            "Total Ordered Operations Played",
          ],
          datasets: [
            {
              label: "Games Played",
              data: [
                res.data.totalGamesPlayed,
                res.data.totalAdditionPlayed,
                res.data.totalSubtractionPlayed,
                res.data.totalMultiplicationPlayed,
                res.data.totalDivisionPlayed,
                res.data.totalOrderedPlayed,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(170, 120, 255, 0.6)",
              ],
            },
          ],
        });
        setTotalScore({
          labels: [
            "Total Score",
            "Addition Total Score",
            "Subtraction Total Score",
            "Multiplication Total Score",
            "Division Total Score",
            "Ordered Operations Total Score",
          ],
          datasets: [
            {
              label: "Total Scores",
              data: [
                res.data.totalScore,
                res.data.totalAdditionScore,
                res.data.totalSubtractionScore,
                res.data.totalMultiplicationScore,
                res.data.totalDivisionScore,
                res.data.totalOrderedScore,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(170, 120, 255, 0.6)",
              ],
            },
          ],
        });
        setGameScore({
          labels: [
            "Addition Highest Score",
            "Subtraction Highest Score",
            "Multiplication Highest Score",
            "Subtraction Highest Score",
            "Ordered Operations Highest Score",
          ],
          datasets: [
            {
              label: "Highest Scores",
              data: [
                res.data.highestAdditionScore,
                res.data.highestSubtractionScore,
                res.data.highestMultiplicationScore,
                res.data.highestDivisionScore,
                res.data.highestOrderedScore,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(80, 200, 190, 0.6)",
              ],
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    getUserStats();
  }, []);

  return (
    <>
      <Box sx={{ marginTop: 6 }}>
        <Grid
          container
          /*  display={"flex"}
          flexDirection="row" */
          justifyContent={"space-evenly"}
        >
          <Grid>
            {totalGamesPlayed.labels ? (
              <Bar
                style={{ width: 1200 }}
                data={totalGamesPlayed}
                options={{
                  title: {
                    display: true,
                    text: "User Stats",
                    fontSize: 25,
                  },
                  legend: {
                    display: true,
                    position: "left",
                  },
                }}
              />
            ) : (
              <div />
            )}
          </Grid>
          <Grid>
            {gameScore.labels ? (
              <Bar
                style={{ width: 1200 }}
                data={gameScore}
                options={{
                  title: {
                    display: true,
                    text: "User Stats",
                    fontSize: 25,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            ) : (
              <Typography>Can't reach user data at the moment</Typography>
            )}
          </Grid>
          <Grid>
            {totalScore.labels ? (
              <Bar
                style={{ width: 1200 }}
                data={totalScore}
                options={{
                  title: {
                    display: true,
                    text: "User Stats",
                    fontSize: 25,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            ) : (
              <Typography>Can't reach user data at the moment</Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashCharts;
