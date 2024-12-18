import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LaptopIcon from '@mui/icons-material/Laptop';
import ToysIcon from '@mui/icons-material/Toys';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloudIcon from '@mui/icons-material/Cloud';
import FolderIcon from '@mui/icons-material/Folder';

function About() {
  return (
    <Grid container spacing={4} padding={15} justifyContent="center" sx={{backgroundColor: "#0B0F1A" }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            boxShadow: 3,
            position: 'relative', // Make sure the card is relative for absolute positioning
            '&:hover': {
              transform: 'scale(1.05)', // Slightly increase size on hover
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add more shadow on hover
            },
            backgroundColor: '#ffffff14',
            
          }}
        >
          <CardContent>
            <LightbulbIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Application Design
            </Typography>
            <Typography variant="body2" color="#fff">
            We creates user-centric application designs that prioritize functionality, seamless navigation, and intuitive interfaces for an exceptional digital experience.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            boxShadow: 3,
            position: 'relative', // Ensure positioning context for the popup
            '&:hover': {
              transform: 'scale(1.05)', // Slightly increase size on hover
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add more shadow on hover
            },
            backgroundColor: '#ffffff14'
          }}
        >
          <CardContent>
            <LaptopIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Web Hosting
            </Typography>
            <Typography variant="body2" color="#fff">
            Our web hosting services offer fast, secure, and reliable solutions, ensuring your website performs flawlessly with minimal downtime and maximum uptime.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            boxShadow: 3,
            position: 'relative', // Ensure positioning context for the popup
            '&:hover': {
              transform: 'scale(1.05)', // Slightly increase size on hover
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add more shadow on hover
            },
            backgroundColor: '#ffffff14'
          }}
        >
          <CardContent>
            <ToysIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Social Media
            </Typography>
            <Typography variant="body2" color="#fff">
            We uses social media strategies to boost engagement, increase brand awareness, and connect your business with a broader, more targeted audience.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            boxShadow: 3,
            position: 'relative', // Ensure positioning context for the popup
            '&:hover': {
              transform: 'scale(1.05)', // Slightly increase size on hover
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add more shadow on hover
            },
            backgroundColor: '#ffffff14'
          }}
        >
          <CardContent>
            <BarChartIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              SEO Optimization
            </Typography>
            <Typography variant="body2" color="#fff">
            We provide expert SEO optimization to enhance your website’s visibility, drive organic traffic, and improve your search engine rankings for long-term success.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            boxShadow: 3,
            position: 'relative', // Ensure positioning context for the popup
            '&:hover': {
              transform: 'scale(1.05)', // Slightly increase size on hover
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add more shadow on hover
            },
            backgroundColor: '#ffffff14'
          }}
        >
          <CardContent>
            <CloudIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Cloud Server
            </Typography>
            <Typography variant="body2" color="#fff">
            We offers scalable cloud server solutions that ensure flexibility, high performance, and seamless integration for your growing business needs.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            boxShadow: 3,
            position: 'relative', // Ensure positioning context for the popup
            '&:hover': {
              transform: 'scale(1.06)', // Slightly increase size on hover
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add more shadow on hover
            },
            backgroundColor: '#ffffff14'
          }}
        >
          <CardContent>
            <FolderIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Data Security
            </Typography>
            <Typography variant="body2" color="#fff">
            Our data security measures protect your sensitive information with advanced encryption, secure protocols, and proactive threat monitoring to maintain your privacy.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default About;
