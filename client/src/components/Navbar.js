import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Math Practice
          </Typography>

          {user ? (
            
              <Button onClick={onClick} color="inherit">Logout</Button>
            
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
