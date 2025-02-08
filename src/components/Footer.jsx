import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, WhatsApp, Mail } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "white", py: 6 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Column 1: Quick Links */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
      
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Home
            </Link>
            <Link
              href="/projects"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Projects
            </Link>
            {/* <Link
              href="/gallery"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Gallery
            </Link> */}
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Contact
            </Link>
           
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📍 203, 2nd floor DDA tower, Plot No. 2, Sec-5, Rohini,
              Delhi-110085
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📞 +91-9910553531, +91-8130760799
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Mail sx={{ mr: 1 }} />
              <Typography variant="body2">
                pinnaclehomesolutions24@gmail.com
              </Typography>
            </Box>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid
            item
            xs={12}
            md={3}
            textAlign="center"
       
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Follow Us
            </Typography>
            <Box>
              <Link
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{ color: "white", "&:hover": { color: "#1877f2" , transform: "scale(1.3)", cursor: "pointer",  transition: "transform 0.2s ease", } }}
                >
                  <Facebook />
                </IconButton>
              </Link>
              <Link
                href="https://www.instagram.com/pinnaclehomesolutions_203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{ color: "white", "&:hover": { color: "#e1306c" , transform: "scale(1.3)", cursor: "pointer",  transition: "transform 0.2s ease", } }}
                >
                  <Instagram />
                </IconButton>
              </Link>
              <Link
                href="https://wa.me/+91-9910553531"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{ color: "white", "&:hover": { color: "#25d366" , transform: "scale(1.3)", cursor: "pointer",  transition: "transform 0.2s ease", } }}
                >
                  <WhatsApp />
                </IconButton>
              </Link>
              <Link
                href="mailto:pinnaclehomesolutions24@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{ color: "white", "&:hover": { color: "#bb001b" , transform: "scale(1.3)", cursor: "pointer",  transition: "transform 0.2s ease", } }}
                >
                  <Mail />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Pinnacle Window. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
