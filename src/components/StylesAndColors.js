import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const StylesAndColors = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          fontWeight: "bold",
        }}
      >
        Styles and Colors of uPVC and Aluminium Doors and Windows
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* uPVC Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
            <CardMedia
              component="img"
              height="250"
              image="images/stylecolor2.jpg"
              alt="uPVC Door"
            />
            <CardContent>
              <Typography variant="h6" color="white">
                uPVC Doors and Windows
              </Typography>
              <Typography variant="body2" color="white">
                uPVC doors and windows come in a variety of colors such as
                white, cream, and even wood effect finishes. They are low
                maintenance and energy-efficient.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Aluminium Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
            <CardMedia
              component="img"
              height="250"
              image="images/stylecolor.jpg"
              alt="Aluminium Window"
            />
            <CardContent>
              <Typography variant="h6" color="white">
                Aluminium Doors and Windows
              </Typography>
              <Typography variant="body2" color="white">
                Aluminium windows and doors are available in a wide range of RAL
                colors. They are durable, modern, and can accommodate large
                glass panes for sleek designs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Color Options */}
      <Box sx={{ marginTop: 5 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            marginBottom: 3,
            fontWeight: "bold",
          }}
        >
          Available Color Options
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* uPVC Color Options */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
              <CardMedia
                component="img"
                height="250"
                image="images/clr.jpg"
                alt="uPVC Color Options"
              />
              <CardContent>
                <Typography variant="h6" color="white">
                  uPVC Color Options
                </Typography>
                <Typography variant="body2" color="white">
                  uPVC doors and windows are primarily available in white,
                  beige, and grey, with a variety of wood grain finishes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Aluminium Color Options */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
              <CardMedia
                component="img"
                height="250"
                image="images/colors.jpg"
                alt="Aluminium Color Options"
                loading="lazy"
              />
              <CardContent>
                <Typography variant="h6" color="white">
                  Aluminium Color Options
                </Typography>
                <Typography variant="body2" color="white">
                  Aluminium frames come in a variety of colors from metallic
                  finishes to bold, custom RAL colors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StylesAndColors;
