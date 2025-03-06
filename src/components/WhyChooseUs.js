import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section style={{ backgroundColor: "#1e1e1e", color: "white", padding: "40px 0", textAlign: "center" }}>
      <Container>
        <Fade in={true} timeout={1000}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", marginBottom: "1.35em" }}
              >
                Why Choose Pinnacle Window for Your Home?
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 3 }}>
                Pinnacle Window specializes in premium <strong>uPVC and aluminum doors and windows</strong>, offering durability, energy efficiency, and aesthetic appeal. Here’s why homeowners and businesses trust us:
              </Typography>
              <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                <li>
                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Superior Quality Materials:</strong> Our <strong>high-performance uPVC and aluminum windows</strong> ensure long-lasting durability, minimal maintenance, and excellent thermal insulation.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Custom Designs:</strong> Choose from a variety of <strong>modern window and door styles</strong> to match your architectural vision.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Expert Installation:</strong> Our skilled professionals guarantee a perfect fit, ensuring seamless and secure installations.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Energy Efficiency:</strong> Reduce energy bills with our <strong>insulated uPVC and aluminum doors</strong> designed for maximum weather resistance.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    <strong>Affordable Prices:</strong> Get premium-quality doors and windows at competitive prices without compromising on craftsmanship.
                  </Typography>
                </li>
              </ul>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6f61",
                  "&:hover": { backgroundColor: "#e65141" },
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                Contact Us for a Free Quote
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
