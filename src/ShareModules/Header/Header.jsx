import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  get_profile,
  handleLoggedOut,
  handleRegistration,
} from "../../Redux/authSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../Header/HeaderStyle.css";
const Header = () => {
  const { isLogin, userpic} = useSelector((s) => s.contents);
  const [is_loggedIn, setis_loggedIn] = useState("");
  const Name = localStorage.getItem("Name");
  useEffect(() => {
    setis_loggedIn(Name);
  }, [Name]);
  useEffect(() => {
    dispatch(get_profile());
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(handleLoggedOut());
    navigate("/login");
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography className="phlogo">
        <img src="../image/logo.png" className="logoimg" alt="" />
      </Typography>

      <ul className="mobile-navigation">
        <li>
          <span className="mobile_name">
            {isLogin ? `Hello ${is_loggedIn}` : ""}
          </span>
          {isLogin ? (
            <Link to="/profilepage">
              <Avatar
                src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`}
                className="mobile_pic"
              />
            </Link>
          ) : null}
        </li>
        <li>
          <NavLink className="navlink" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/addproduct">
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/showproduct">
            Show Product
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/contact">
            Contact
          </NavLink>
        </li>
        {isLogin ? (
          <li sx={{ display: { sm: "none", md: "block" } }}>
            <Button
              onClick={() => {
                logout();
                dispatch(handleRegistration());
              }}
            >
              <ExitToAppIcon
                sx={{ fontSize: "2.2rem", marginRight: "5px", color: "black" }}
              />
            </Button>
          </li>
        ) : (
          <li sx={{ display: { sm: "none", md: "block" } }}>
            <Link to="/login">
              <AccountCircleIcon
                sx={{ fontSize: "2.2rem", marginRight: "5px", color: "black" }}
              />
            </Link>
          </li>
        )}
      </ul>
    </Box>
  );
  return (
    <div className="navbar">
      <AppBar
        className="AppBar"
        component={"nav"}
        sx={{ bgcolor: "goldenrod" }}
      >
        <Toolbar className="toolbar">
          <Typography className="logoimg">
            <img src="../image/logo.png"  alt="" />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { md: "none" }}}
            onClick={handleDrawerToggle}
          >
            <MenuIcon className="hamburger"/>
          </IconButton>
          <Box sx={{ display: { sm: "none", md: "block",xs:"none" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink className="navlink" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <Button
                  className="dropdown"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Product
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/addproduct">Add Product</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/showproduct">Show Product</NavLink>
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <NavLink className="navlink" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </Box>
          <Box className="profile" >
            <Box sx={{ display: { sm: "none", md: "block",xs:"none" } }}>
              <span className="profile_name">
                {isLogin ? `Hello ${is_loggedIn}` : ""}
              </span>
              {isLogin ? (
                <Link to="/profilepage">
                  <Avatar
                    src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`}
                    className="profile_pic"
                  />
                </Link>
              ) : null}
            </Box>
            <Box>
              {isLogin ? (
                <Box sx={{ display: { sm: "none", md: "block",xs:"none" } }}>
                  <Button
                    onClick={() => {
                      logout();
                      dispatch(handleRegistration());
                    }}
                  >
                    <ExitToAppIcon
                      sx={{
                        fontSize: "2.2rem",
                        marginRight: "7px",
                        color: "black",
                        marginTop: "4px",
                      }}
                    />
                  </Button>
                </Box>
              ) : (
                <Box sx={{ display: { sm: "none", md: "block",xs:"none" } }}>
                  <Link to="/login">
                    <Button className="login_button">Login</Button>
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { sm:"block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </div>
  );
};

export default Header;
