import React from "react";
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Fade } from "@mui/material";

const specifications = [
  {
    title: "Aluminium Doors",
    description: "Aluminum doors are built to last, offering exceptional strength and resistance to impact.",
    image: "images/Aluminum 3.jpg"
  },
  {
    title: "Aluminium Windows",
    description: "With thermal breaks, aluminum windows can help reduce heat transfer, improving insulation.",
    image: "images/aluminum 5.jpg"
  },
  {
    title: "Upvc Doors and Windows",
    description: "uPVC doors offer excellent thermal insulation and reduce energy bills.",
    image: "images/upvc 2.jpg"
  },
  {
    title: "Sliding Doors and Windows",
    description: "Sliding doors open horizontally, making them ideal for areas with limited space.",
    image: "images/upvc 1.png"
  },
  {
    title: "Fix and Top Hung Windows",
    description: "Fixed windows are designed to provide a clean look, ideal for enhancing contemporary home aesthetics.",
    image: "images/fix.jpg" 
  },
  {
    title: "Double Hung Windows",
    description: "Double-hung windows are available with energy-efficient options, which help to reduce heat loss.",
    image: "images/dounble hung.jpg" // 
  }
];

const Specifications = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: 5 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Specifications
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {specifications.map((spec, index) => (
            <Fade in={true} timeout={800 + index * 200} key={index}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <CardMedia component="img" height="200" image={spec.image} alt={spec.title} />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {spec.title}
                    </Typography>
                    <Typography variant="body2">{spec.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Specifications;
