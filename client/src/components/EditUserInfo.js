import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

const theme = createTheme();

export default function EditUserInfo(props) {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const token = user.token;
  const [formData, setFormData] = useState({
    newUsername: "",
    newEmail: "",
    currentPassword: "",
    newPassword: "",
  });
  const { newUsername, newEmail, currentPassword, newPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {};
    if (newUsername) userData.newUsername = newUsername;
    if (newEmail) userData.newEmail = newEmail;
    if (currentPassword) userData.currentPassword = currentPassword;
    if (newPassword) userData.newPassword = newPassword;
    const updateUser = async (userData, token) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        "http://localhost:5000/users/updateuser",
        userData,
        config
      );

      if (response.data) {
        console.log(response.data);
        props.onUpdateSuccess();
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    };
    updateUser(userData, token);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              inputProps={{ "data-testid": "new-username" }}
              margin="normal"
              required
              fullWidth
              id="new-username"
              placeholder={user.username}
              label="New Username"
              value={newUsername}
              name="newUsername"
              autoComplete="new-username"
              onChange={onChange}
              autoFocus
            />
            <TextField
              inputProps={{ "data-testid": "new-email" }}
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder={user.email}
              label="New email address"
              value={newEmail}
              name="newEmail"
              autoComplete="email"
              onChange={onChange}
            />
            <TextField
              inputProps={{ "data-testid": "current-password" }}
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Current password"
              value={currentPassword}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChange}
            />
            <TextField
              inputProps={{ "data-testid": "new-password" }}
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="New password"
              value={newPassword}
              type="password"
              id="new-password"
              autoComplete="new-password"
              onChange={onChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
