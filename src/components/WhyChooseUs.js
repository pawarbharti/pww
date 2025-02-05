import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Fade } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "white", py: 6, textAlign: "center" }}>
      <Container>
        <Fade in={true} timeout={1000}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                Why Choose Us?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                At Pinnacle Window, we specialize in high-quality UPVC and aluminum doors and windows, designed to enhance the beauty and functionality of your home. 
                Here’s why you should choose us:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>1. Superior Quality Materials:</strong> We use only the finest UPVC and aluminum materials to ensure long-lasting durability, energy efficiency, and low maintenance.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>2. Custom Designs:</strong> Our doors and windows come in a variety of styles, sizes, and finishes, so you can find the perfect match for your home’s aesthetic.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>3. Expert Installation:</strong> Our skilled team ensures flawless installation, providing you with seamless and secure doors and windows that fit perfectly every time.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>4. Energy Efficiency:</strong> Our UPVC and aluminum solutions are designed to help you save on energy bills by offering excellent insulation and weather resistance.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>5. Affordable Prices:</strong> We offer competitive pricing without compromising on quality, giving you the best value for your investment.
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

export default WhyChooseUs;
