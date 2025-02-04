import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { Fade } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  "High-quality materials",
  "Energy-efficient solutions",
  "Modern & customizable designs",
  "Weather-resistant durability",
  "Easy maintenance",
  "Expert installation service",
];

const EverythingYouNeed = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: 6, textAlign: "center" }}>
      <Container>
        <Fade in={true} timeout={1000}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Everything You Need
          </Typography>
        </Fade>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {features.map((feature, index) => (
            <Fade in={true} timeout={800 + index * 200} key={index}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    textAlign: "center",
                    py: 3,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <CheckCircleIcon sx={{ fontSize: 40, color: "#ff6f61" }} />
                    <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                      {feature}
                    </Typography>
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

export default EverythingYouNeed;
