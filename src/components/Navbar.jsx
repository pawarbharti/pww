// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav>
//     <div>
//         <ul style={{listStyleType: "none", display:"flex", justifyContent:"space-around"}}>
//         <li>Home</li>
//         <li>Projects</li>
//         <li>Gallery</li>
//         <li>Contact</li>
//         <li>About</li>
        
//         </ul>
//     </div>
        
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ["Home", "Projects", "Gallery", "Contact", "About"];

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
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Typography key={item} sx={{ color: "white", mx: 2, cursor: "pointer" }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#121212", color: "white" } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
