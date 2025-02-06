import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";

const galleryImages = [
  "images/gallery 2.jpg",
  "images/gallery 11.jpg",
  "images/gallery 4.jpg",
  "images/gallery 12.png",
  "images/gallery 1.jpg",
  "images/gallery 3.png",
  "images/gallery 5.jpg",
  "images/gallery 6.png",
  "images/gallery 7.jpg",
  "images/gallery 8.jpg",
  "images/gallery 9.jpg",
  "images/gallery 10.jpg",
  "images/gallery 13.jpg",
  "images/gallery 14.png",
  "images/gallery 15.jpg",
];

const Gallery = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Select by Category
      </Typography>

      {/* Gallery Grid */}
      <Grid container spacing={4} justifyContent="center">
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                width: "100%",
                maxHeight: "400px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Gallery image ${index + 1}`}
                sx={{
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
