import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import EditUserInfo from "../components/EditUserInfo";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const theme = createTheme((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
  },
  name: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
  },
  list: {
    marginTop: theme.spacing(2),
  },
  listItem: {
    padding: theme.spacing(1),
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const date = user.joinDate;
  const navLocation = 'profile'
  

  let joinDate = new Date(date);
  joinDate = joinDate.toLocaleDateString();

  const [isEditing, setIsEditing] = useState(false);

  const editBtn = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  return (
    <>
    <Navbar navLocation={navLocation}/>
      {!isEditing ? (
        <ThemeProvider theme={theme}>
          {console.log(user)}
          <Container sx={{mt:4}} maxWidth="sm">
            <Paper className={theme.paper}>
              <Grid container spacing={2}>
                
                <Grid item xs={12}>
                  <Typography className={theme.name} variant="h5">
                    {`Welcome ${user.username}`}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid justifyContent="center" alignItems="center" item xs={12}>
                  <List className={theme.list}>
                    <ListItem className={theme.listItem}>
                      <ListItemText
                        primary="Username"
                        secondary={`${user.username}`}
                      />
                    </ListItem>
                    <ListItem className={theme.listItem}>
                      <ListItemText
                        primary="Email"
                        secondary={`${user.email}`}
                      />
                    </ListItem>
                    <ListItem className={theme.listItem}>
                      <ListItemText
                        primary="Join Date"
                        secondary={`${joinDate}`}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Paper>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button onClick={editBtn} variant="contained">
                Edit user information
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      ) : (
        <EditUserInfo onUpdateSuccess={handleUpdate} />
      )}
    </>
  );
};

export default Profile;
