import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Fade,
} from "@mui/material";

const specifications = [
  {
    title: "Modern Aluminium Doors",
    description:
      "Enhance your home with durable and stylish aluminum doors. These doors offer excellent impact resistance, energy efficiency, and a sleek modern design.",
    image: "images/Aluminum 3.jpg",
    alt: "Modern Aluminium Doors with Strong Impact Resistance",
  },
  {
    title: "Energy-Efficient Aluminium Windows",
    description:
      "Aluminum windows with thermal breaks help reduce heat transfer, improving insulation and cutting down on energy bills.",
    image: "images/aluminum 5.jpg",
    alt: "Energy-Efficient Aluminium Windows with Thermal Break Technology",
  },
  {
    title: "uPVC Doors & Windows for Better Insulation",
    description:
      "Designed for high thermal efficiency, uPVC doors and windows help maintain indoor temperature, reducing heating and cooling costs.",
    image: "images/upvc 2.jpg",
    alt: "White uPVC Doors and Windows Offering High Insulation",
  },
  {
    title: "Space-Saving Sliding Doors & Windows",
    description:
      "Sliding doors provide a modern touch with effortless operation. Ideal for compact spaces, they maximize natural light and ventilation.",
    image: "images/upvc 1.png",
    alt: "Modern Sliding Doors and Windows with Space-Saving Design",
  },
  {
    title: "Fixed & Top Hung Windows for Modern Homes",
    description:
      "Fixed windows offer uninterrupted views, while top-hung windows provide controlled ventilation—both ideal for contemporary home designs.",
    image: "images/fix.jpg",
    alt: "Fixed and Top Hung Windows with Modern Aesthetic",
  },
  {
    title: "Energy-Saving Casement Windows",
    description:
      "Casement windows provide superior airflow and energy efficiency, making them an ideal choice for sustainable homes.",
    image: "images/dounble hung.jpg",
    alt: "Casement Windows with Enhanced Energy Efficiency",
  },
];

const Specifications = () => {
  return (
    <section style={{ backgroundColor: "#121212", color: "white", padding: "40px 0" }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: "1.35em" }}
        >
          Product Specifications & Benefits
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {specifications.map((spec, index) => (
            <Fade in={true} timeout={800 + index * 200} key={index}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    backgroundColor: "#1e1e1e",
                    color: "white",
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
                    image={spec.image}
                    alt={spec.alt}
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                      {spec.title}
                    </Typography>
                    <Typography variant="body2">{spec.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Specifications;
