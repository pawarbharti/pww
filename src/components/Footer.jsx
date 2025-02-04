import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "white", py: 6 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Column 1: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Home
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Projects
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Gallery
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Contact
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              About
            </Link>
          </Grid>

          {/* Column 2: Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="body2">📍 203, 2nd floor DDA tower, Plot No. 2, Sec-5, Rohini, Delhi-110085</Typography>
            <Typography variant="body2">📞 +91-9910553531, +91-8130760799</Typography>
            <Typography variant="body2">📧 pinnaclehomesolutions24@gmail.com</Typography>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid item xs={12} md={3} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton sx={{ color: "white", "&:hover": { color: "#1877f2" } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white", "&:hover": { color: "#1da1f2" } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white", "&:hover": { color: "#e1306c" } }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white", "&:hover": { color: "#0077b5" } }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}>
          <Typography variant="body2">© {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
