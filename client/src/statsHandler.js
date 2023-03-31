import axios from "axios";

export const updateScore = async (finalScore, operation, token) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const body = JSON.stringify({ finalScore, operation });

    const res = await axios.patch(
      "http://localhost:5000/users/updateuserstats",
      body,
      config
    );

    if (operation === "+") {
      console.log(res.data.userStats);
    } else if (operation === "-") {
      console.log(res.data.userStats);
    } else if (operation === "*") {
      console.log(res.data.userStats);
    } else if (operation === "/") {
      console.log(res.data.userStats);
    } else console.log(res.data.userStats);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
