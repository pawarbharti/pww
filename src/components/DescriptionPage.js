import React from "react";
import { Box, Container, Grid, Typography, CardMedia } from "@mui/material";

const DescriptionPage = () => {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#121212", color: "white", py: 5 }}
    >
      <Container>
        <Typography
          variant="h1"
          align="left"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: { xs: "2rem", sm: "2.5rem" } }}
        >
          Pinnacle Window
        </Typography>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Left side: SEO-optimized content */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 2 }}
            >
              Elevate Your Space with Modern, Durable Windows & Doors
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Discover the perfect blend of{" "}
              <strong>style, energy efficiency, and durability</strong> with our
              premium <strong>aluminum and uPVC doors and windows</strong>.
              Designed for modern homes and commercial spaces, our selection
              offers exceptional <strong>thermal insulation</strong> and
              contemporary aesthetics.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Choose from a variety of styles, including{" "}
              <strong>double-hung windows</strong> for easy cleaning and
              ventilation, <strong>top-hung windows</strong> for a stylish
              touch, or sleek <strong>sliding doors</strong> for seamless
              indoor-outdoor living. Our high-quality materials ensure{" "}
              <strong>long-lasting performance</strong> in all weather
              conditions.
            </Typography>
          </Grid>

          {/* Right side: Optimized Image */}
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              height="auto"
              image="images/sliding1.png"
              alt="Stylish Aluminium & uPVC Sliding Doors - Energy Efficient & Durable"
              loading="lazy"
              sx={{
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DescriptionPage;
