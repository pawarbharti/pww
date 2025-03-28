import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const customerStories = [
  {
    name: 'John Doe',
    story: 'I love the new windows I installed from this company! They really made my home more energy-efficient and stylish.',
    image: 'https://via.placeholder.com/300', // Add real image URL
  },
  {
    name: 'Jane Smith',
    story: 'The team was professional and the installation was smooth. My home feels so much brighter with these new windows.',
    image: 'https://via.placeholder.com/300', // Add real image URL
  },
  {
    name: 'Alice Johnson',
    story: 'I’ve noticed a huge difference in noise reduction since I installed the windows. Great product!',
    image: 'https://via.placeholder.com/300', // Add real image URL
  },
];

const CustomerStories = () => {
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
        Customer Stories
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {customerStories.map((story, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#1e1e1e' }}>
              <CardMedia
                component="img"
                height="200"
                image={story.image}
                alt={story.name}
              />
              <CardContent>
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
