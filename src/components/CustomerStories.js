import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const customerStories = [
  {
    name: "Amritsar, Punjab",
    story:
      "The new windows have completely transformed the building. Not only do they enhance the aesthetic appeal of my space, but they also made a noticeable difference in my energy efficiency. My home is now more comfortable, and I’m saving money on utility bills!",
    image: "images/Real 3.jpg",
  },
  {
    name: "Rohini, Delhi",
    story:
      "From start to finish, the experience was seamless. The team was incredibly professional, and the installation was quick. The new windows have allowed so much more light, making it feel brighter and more inviting.",
    image: "images/real 7.jpg",
  },
  {
    name: "Tirupati Farm, Gurugram, Haryana",
    story:
      "Since installing these windows, my farm has become quieter and cozier. Not only did the installation process go smoothly, but I was impressed by how punctual and skilled the team was. A top-notch experience from beginning to end.",
    image: "images/real 8.jpg",
  },

  {
    name: "GTB Nagar, Delhi",
    story:
      "I’m beyond pleased with my new windows. Not only do they add a sleek look, but I’ve already noticed a significant reduction in my energy bills. I can honestly say I couldn’t be happier with this investment!",
    image: "images/Real 5.jpg",
  },
  {
    name: "Gurugram, Haryana",
    story:
      "I was impressed by both the quality of the windows and the efficiency of the installation. My home feels so much better, with better insulation and a more refined look. It’s a small change that made a huge difference!",
    image: "images/Real 1.jpg",
  },
  {
    name: "Amritsar, Punjab",
    story:
      "These windows have not only improved the look, but they’ve also brought a noticeable reduction in outside noise. The team did an excellent job, and the installation was timely and professional. I can already feel the difference in comfort and energy efficiency.",
    image: "images/REAL 2.jpg",
  },
];

const CustomerStories = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{mb: "1.35em"}}>
        Customer Stories
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {customerStories.map((story, index) => (
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
                image={story.image}
                alt={story.name}
                sx={{
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" gutterBottom>
                  {story.name}
                </Typography>
                <Typography variant="body2">{story.story}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerStories;
