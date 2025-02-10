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
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDownload = () => {
    const pdfUrl = "/PINNACLE WINDOW CATALOGUE.pdf";
    saveAs(pdfUrl, "PINNACLE WINDOW CATALOGUE.pdf");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="/images/pinnacle window logo.jpg"
            alt="Logo"
            style={{ height: 60, marginRight: 16, marginTop: 5 }}
          />
          <Box sx={{ ml: "auto", display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: "white",
                    mx: 2,
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* Add the download icon with tooltip at the end */}
            <Tooltip title="Download Catalogue">
              <IconButton color="inherit" onClick={handleDownload}>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#121212", color: "white" },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.name} onClick={handleDrawerToggle}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
