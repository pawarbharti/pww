
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="/images/pinnacle window logo.jpg" 
            alt="Logo"
            style={{ height: 60, marginRight: 16, marginTop: 5 }}
          />
          <Box sx={{ ml: "auto", display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Link to={item.path} key={item.name} style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: "white", mx: 2, cursor: "pointer" }}>
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#121212", color: "white" },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.name} onClick={handleDrawerToggle}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
