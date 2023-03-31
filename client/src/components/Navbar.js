import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { restart } from "../features/gameSlice";
import DropDownMenu from "./DropDownMenu";

export default function Navbar(props) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const gameStart = useSelector((state) => state.game.isStarted);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
    dispatch(restart());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user ? (
            <DropDownMenu
              profileLocation={props.profileLocation}
              props={props}
            />
          ) : (
            () => {}
          )}

          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {!gameStart ?(<Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Math Practice
            </Link>):(<>Math Practice</>)}
          </Typography>

          {user ? (
            <Button onClick={onClick} color="inherit">
              Logout
            </Button>
          ) : (
            <>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/register"
              >
                <Button color="inherit">Register</Button>
              </Link>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
