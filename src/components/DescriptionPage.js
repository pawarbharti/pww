import React from "react";
import { Box, Container, Grid, Typography, CardMedia } from "@mui/material";

const DescriptionPage = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: 5 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Description
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Left side: Paragraph */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "white", fontSize: "1.1rem" }}
            >
              Aluminum and uPVC doors and windows are the perfect combination of
              style and durability for modern homes. They offer excellent
              thermal insulation, providing energy-efficient solutions while
              enhancing the aesthetic of any living space. Whether you're
              looking for sleek aluminum frames or the high energy efficiency of
              uPVC, our selection ensures longevity and superior performance.
              Sliding doors and fixed windows are also a fantastic option for
              enhancing contemporary home designs.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "white", fontSize: "1.1rem" }}
            >
              Choose from our wide variety of designs such as double-hung
              windows that allow for easy cleaning and airflow, or top-hung
              windows for a unique, stylish touch. No matter what you're looking
              for, our products deliver premium quality and exceptional
              performance, meeting the highest standards for both residential
              and commercial applications.
            </Typography>
          </Grid>

          {/* Right side: GIF */}
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              height="auto"
              image="images/sliding1.png"
              alt="Aluminum Doors"
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
