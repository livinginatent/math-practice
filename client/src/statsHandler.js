import axios from "axios";
export const updateScore = async (highestScore, token) => {
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
    console.log(res.data.userStats);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
