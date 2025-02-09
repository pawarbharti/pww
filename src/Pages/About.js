import React from "react";
import { Box, Container, Grid, Typography, CardMedia } from "@mui/material";
import FAQ from "../components/FrequentlyAskedQuestions";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: 5 }}>
      <Container>
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          About Pinnacle Window
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Left side: Company Info */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.1rem" } }}
            >
              Pinnacle Window is a leading provider of premium uPVC and aluminum
              doors and windows, offering the perfect blend of style,
              durability, and energy efficiency. With years of expertise in the
              industry, we specialize in delivering top-quality products that
              meet the highest standards for both residential and commercial
              properties.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.1rem" } }}
            >
              Our range of windows and doors are designed to not only enhance
              the aesthetic appeal of your space but also provide superior
              insulation and weather resistance. Whether you are building a new
              home, renovating, or upgrading your office space, Pinnacle Window
              provides innovative solutions that cater to modern living.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.1rem" } }}
            >
              At Pinnacle Window, we are committed to delivering exceptional
              customer service, ensuring that every project is handled with
              professionalism and attention to detail. Our products are designed
              to deliver lasting performance, and we take pride in being your
              trusted partner for all your door and window needs.
            </Typography>
          </Grid>

          {/* Right side: Images with gap between them */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {/* Added a Grid container for spacing between images */}
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  height="270"
                  image="images/gallery 6.png"
                  alt="New Pinnacle Window Product"
                  sx={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                    },
                  }}
                />
              </Grid>
              {/* Existing Image Below */}
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  height="270"
                  image="images/gallery 12.png"
                  alt="Pinnacle Window Products"
                  sx={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                    width: "100%",
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
          </Grid>
        </Grid>
        <FAQ />
      </Container>
    </Box>
  );
};

export default About;
