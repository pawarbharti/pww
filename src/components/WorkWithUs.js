import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Fade } from "@mui/material";

const WorkWithUs = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "white", py: 6, textAlign: "center" }}>
      <Container>
        <Fade in={true} timeout={1000}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                Work With Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Join our team and be a part of our mission to provide high-quality home windows. 
                We’re looking for professionals who are passionate about craftsmanship and innovation.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff6f61",
                  "&:hover": { backgroundColor: "#e65141" },
                  fontWeight: "bold",
                }}
              >
                Get in Touch
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default WorkWithUs;
