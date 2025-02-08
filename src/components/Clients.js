import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const Clients = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Dark theme background
        color: "#e0e0e0", // Light text color for contrast
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
        Our Esteemed Clients
      </Typography>

      {/* Client Testimonials or Logos */}
      <Grid container spacing={4} justifyContent="center">
        {/* Client 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x140.png?text=Client+Logo+1"
              alt="Client Logo"
            />
            <CardContent>
              <Typography variant="h6" color="white">
                Client Name 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "We are extremely satisfied with our uPVC windows and doors. They provide excellent insulation and enhance the beauty of our home."
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Client 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x140.png?text=Client+Logo+2"
              alt="Client Logo"
            />
            <CardContent>
              <Typography variant="h6" color="white">
                Client Name 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "The aluminium windows are sleek, modern, and durable. We highly recommend them for both residential and commercial properties."
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Client 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x140.png?text=Client+Logo+3"
              alt="Client Logo"
            />
            <CardContent>
              <Typography variant="h6" color="white">
                Client Name 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "uPVC doors have completely transformed the look of our office. They are energy-efficient and low-maintenance."
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Client 4 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x140.png?text=Client+Logo+4"
              alt="Client Logo"
            />
            <CardContent>
              <Typography variant="h6" color="white">
                Client Name 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "We love the aluminium windows we installed in our new home. They give a modern and clean look while being very strong."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Clients;
