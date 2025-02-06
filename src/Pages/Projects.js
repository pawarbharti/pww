import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Divider, Dialog, DialogContent, IconButton, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';

const projects = [
  {
    title: 'Modern Living Room Windows',
    description: 'Installed energy-efficient windows that enhance natural lighting and aesthetics.',
    image: 'https://source.unsplash.com/600x400/?livingroom,windows'
  },
  {
    title: 'Luxury Patio Doors',
    description: 'Elegant sliding doors providing seamless access to the backyard with a modern touch.',
    image: 'https://source.unsplash.com/600x400/?patio,doors'
  },
  {
    title: 'Office Glass Partitions',
    description: 'Designed and installed soundproof glass partitions for a contemporary office space.',
    image: 'https://source.unsplash.com/600x400/?office,glass'
  },
  {
    title: 'Classic Wooden Windows',
    description: 'Beautiful wooden-framed windows installed in a heritage home for a classic look.',
    image: 'https://source.unsplash.com/600x400/?wooden,windows'
  },
  {
    title: 'Minimalist Bedroom Windows',
    description: 'Large, double-glazed windows creating a spacious and airy feel in the bedroom.',
    image: 'https://source.unsplash.com/600x400/?bedroom,windows'
  },
  {
    title: 'Commercial Storefront Installation',
    description: 'Installed durable and stylish glass panels for a retail store.',
    image: 'https://source.unsplash.com/600x400/?storefront,glass'
  },
];

const testimonials = [
  {
    name: 'Sarah Williams',
    feedback: 'The best decision I made for my home! The quality and service were exceptional.',
    image: 'https://source.unsplash.com/100x100/?woman,portrait'
  },
  {
    name: 'David Johnson',
    feedback: 'Professional installation and top-notch customer service. Highly recommend!',
    image: 'https://source.unsplash.com/100x100/?man,portrait'
  },
  {
    name: 'Emily Brown',
    feedback: 'The new windows made my home more energy-efficient and stylish.',
    image: 'https://source.unsplash.com/100x100/?woman,smiling'
  },
  {
    name: 'Michael Scott',
    feedback: 'Excellent craftsmanship and great customer support. Will use again!',
    image: 'https://source.unsplash.com/100x100/?man,smile'
  },
  {
    name: 'Jessica Lee',
    feedback: 'From consultation to installation, everything was smooth and hassle-free.',
    image: 'https://source.unsplash.com/100x100/?woman,face'
  }
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
        backgroundColor: '#121212',
        color: 'white',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Our Projects
      </Typography>
      <Divider sx={{ backgroundColor: 'white', marginBottom: '20px' }} />
      
      <Typography variant="h5" align="center" gutterBottom>
        Featured Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#1e1e1e', cursor: 'pointer' }} onClick={() => handleOpen(project)}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ color: 'white' }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ padding: '40px 0', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" maxWidth="600px" margin="auto">
          Our team of experts ensures the best quality materials and professional installation.
          We prioritize customer satisfaction and provide energy-efficient solutions for homes and offices.
        </Typography>
      </Box>
      
      <Box sx={{ padding: '40px 0', textAlign: 'center', backgroundColor: '#1e1e1e' }}>
        <Typography variant="h5" gutterBottom>
          Customer Testimonials
        </Typography>
        <Carousel autoPlay={true} animation="slide" indicators={false}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} sx={{ backgroundColor: '#1e1e1e', color: 'white', padding: '20px', textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="150"
                image={testimonial.image}
                alt={testimonial.name}
                sx={{ borderRadius: '50%', width: '100px', margin: 'auto' }}
              />
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2">"{testimonial.feedback}"</Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>

      <Dialog fullScreen open={!!selectedProject} onClose={handleClose} TransitionComponent={Transition}>
        <DialogContent sx={{ backgroundColor: '#121212', color: 'white', textAlign: 'center' }}>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" sx={{ position: 'absolute', top: 10, right: 10 }}>
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
                sx={{ borderRadius: '10px', marginBottom: '20px' }}
              />
              <Typography variant="body1">{selectedProject.description}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;