import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-material-ui-carousel";

const projects = [
  {
    title: "Modern Living with UPVC Sliding Doors",
    description:
      "uPVC sliding doors are a popular choice for modern homes and commercial spaces due to their durability, low maintenance, and energy efficiency. uPVC stands for unplasticized polyvinyl chloride, a material known for its strength and weather resistance, making it an ideal option for exterior doors. These doors feature one or more panels that glide smoothly along a track, withone fixed and one or more movable panels. The sliding mechanism allows for easy access to outdoor spaces without taking up additional room for door swing.",
    image: "images/projects 1.png",
  },
  {
    title: "Luxury Patio Doors",
    description:  "Sliding patio doors often have thin frames to maximize the glass area, providing clear, unobstructed views of the outdoor environment and letting in ample natural light. They are ideal for homes with limited space, as they don't require additional clearance like traditional swinging doors. These doors can be made from a variety of materials, including wood, aluminum, or vinyl, and are often designed with energy-efficient glass to help with insulation. Additionally, sliding patio doors may come with built-in screens to keep bugs out while allowing fresh air in.",
    image: "images/projects 3.jpg",
  },
  {
    title: "UPVC Windows",
    description:
      "uPVC windows are a highly durable and energy-efficient option for homeowners. Made from unplasticized polyvinyl chloride, they are resistant to weathering, corrosion, and fading, ensuring long-lasting performance with minimal maintenance. These windows offer excellent insulation, keeping homes warm in winter and cool in summer, and often come with double or triple glazing for enhanced thermal efficiency and soundproofing. uPVC frames do not require regular painting or sealing, making them easy to maintain. These windows will not rot or corrode over time.",
    image: "images/projects 2.jpg",
  },
  {
    title: "Classic Wooden Windows",
    description:
      "Wooden windows are a classic and timeless choice for homeowners who appreciate natural beauty and craftsmanship. These windows offer a warm, aesthetic appeal that enhances the character of both traditional and contemporary homes. Made from high-quality timber, wooden windows provide excellent insulation, helping to regulate indoor temperatures by preventing heat loss in winter and keeping cool air inside during the summer. They are naturally energy-efficient, offering both thermal and sound insulation.",
    image: "images/projects 4.jpg",
  },
  {
    title: "Aluminium Doors",
    description:
      "Aluminum doors combine modern design with exceptional durability, offering a sleek, stylish solution for both residential and commercial spaces. Made from high-quality, corrosion-resistant aluminum, these doors are built to withstand harsh weather conditions while maintaining their appearance over time. Their energy-efficient properties, enhanced with double or triple glazing options, help maintain optimal temperature control inside your space.With reinforced frames, aluminum doors also provide enhanced security.",
    image: "images/projects 5.jpg",
  },
  {
    title: "Commercial Storefront Installation",
    description:
      "Aluminum windows are a perfect combination of style, strength, and efficiency. Known for their sleek, modern appearance, these windows are crafted from high-quality, corrosion-resistant aluminum, making them highly durable and long-lasting. With their excellent thermal efficiency, aluminum windows help maintain a comfortable indoor climate year-round by minimizing heat loss in the winter and keeping interiors cool during the summer. These windows are of low-maintenance.",
    image: "images/project 6.jpg",
  },
];

const testimonials = [
  {
    name: "Sarah Williams",
    feedback:
      "The best decision I made for my home! The quality and service were exceptional.",
    image: "https://source.unsplash.com/100x100/?woman,portrait",
  },
  {
    name: "David Johnson",
    feedback:
      "Professional installation and top-notch customer service. Highly recommend!",
    image: "https://source.unsplash.com/100x100/?man,portrait",
  },
  {
    name: "Emily Brown",
    feedback: "The new windows made my home more energy-efficient and stylish.",
    image: "https://source.unsplash.com/100x100/?woman,smiling",
  },
  {
    name: "Michael Scott",
    feedback:
      "Excellent craftsmanship and great customer support. Will use again!",
    image: "https://source.unsplash.com/100x100/?man,smile",
  },
  {
    name: "Jessica Lee",
    feedback:
      "From consultation to installation, everything was smooth and hassle-free.",
    image: "https://source.unsplash.com/100x100/?woman,face",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      {/* <Typography variant="h4" align="center" gutterBottom>
        Our Projects
      </Typography> */}


      <Typography variant="h5" align="center" gutterBottom>
        Featured Projects
      </Typography>
      <Divider sx={{ backgroundColor: "white", marginBottom: "20px" }} />

      
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ backgroundColor: "#1e1e1e", cursor: "pointer" }}
              onClick={() => handleOpen(project)}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ padding: "40px 0", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" maxWidth="600px" margin="auto">
          Our team of experts ensures the best quality materials and
          professional installation. We prioritize customer satisfaction and
          provide energy-efficient solutions for homes and offices.
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "40px 0",
          textAlign: "center",
          backgroundColor: "#1e1e1e",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Customer Testimonials
        </Typography>
        <Carousel autoPlay={true} animation="slide" indicators={false}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={testimonial.image}
                alt={testimonial.name}
                sx={{ borderRadius: "50%", width: "100px", margin: "auto" }}
              />
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2">
                  "{testimonial.feedback}"
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>

      <Dialog
        fullScreen
        open={!!selectedProject}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent
          sx={{
            backgroundColor: "#121212",
            color: "white",
            textAlign: "center",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedProject && (
            <>
              <Typography variant="h4" gutterBottom>
                {selectedProject.title}
              </Typography>
              <CardMedia
                component="img"
                height="400"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{ borderRadius: "10px", marginBottom: "20px" }}
              />
              <Typography variant="body1">
                {selectedProject.description}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;
