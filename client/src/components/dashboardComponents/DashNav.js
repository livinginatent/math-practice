import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import DropDownMenu from "../DropDownMenu";
import { useNavigate } from "react-router";
import { logout } from "../../features/auth/authSlice";

export default function DashNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logout());
    navigate("/");
  };

  const navLocation = "dashboard";
  const user = useSelector((state) => state.auth.user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <DropDownMenu navLocation={navLocation} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`Welcome ${user.username}!`}
          </Typography>
          <Button onClick={onClick} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
