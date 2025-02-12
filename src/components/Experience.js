import React from "react";
import { Box, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        padding: 3,
        marginTop: 4,
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
        Over 16 Years of Interior Designing Experience
      </Typography>

      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          padding: 3,
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          A Proven Track Record in Designing Spaces
        </Typography>
        <Typography sx={{ color: "#e0e0e0" }}>
          With over 16 years of experience in the interior design industry, I have successfully worked on a wide range of residential and commercial projects. My expertise spans across various styles, from modern and minimalist to classic and eclectic, ensuring that each design is tailored to the client's vision and needs.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          padding: 3,
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Expertise in Every Aspect of Interior Design
        </Typography>
        <Typography sx={{ color: "#e0e0e0" }}>
          I have experience in every aspect of interior design, including space planning, furniture selection, color schemes, lighting design, and more. Over the years, I’ve honed my skills and developed a keen eye for detail, ensuring that each project is executed flawlessly.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          padding: 3,
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Passion for Creating Functional and Beautiful Spaces
        </Typography>
        <Typography sx={{ color: "#e0e0e0" }}>
          I believe in designing spaces that are not only visually appealing but also functional. My approach blends aesthetics with practicality, making sure each design serves both the purpose and the style preferences of my clients. With a strong focus on creativity and quality, I strive to deliver exceptional results in every project I undertake.
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
