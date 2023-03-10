import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DropDownMenu(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (props.dashLocation === "dashboard") {
    return (
      <div>
        
        <IconButton
          startIcon={<MenuIcon />}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/profile">
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  } else if(props.profileLocation ==='profile'){
    return (
      <div>
        <IconButton
          startIcon={<MenuIcon />}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/dashboard">
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
   else{

    return (<div>
      <IconButton
        startIcon={<MenuIcon />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/profile"
        >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
          
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/dashboard"
        >
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          
        </Link>
      </Menu>
    </div>
)  }
}
