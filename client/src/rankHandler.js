import axios from "axios";

export const updateRank = async ( token) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    

    const res = await axios.patch(
      "http://localhost:5000/users/rankup",
    
      config
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};