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
          }}
        >
          <CardContent>
            <LightbulbIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Application Design
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          }}
        >
          <CardContent>
            <LaptopIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Web Hosting
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          }}
        >
          <CardContent>
            <ToysIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Social Media
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          }}
        >
          <CardContent>
            <BarChartIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              SEO Optimization
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          }}
        >
          <CardContent>
            <CloudIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Cloud Server
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          }}
        >
          <CardContent>
            <FolderIcon sx={{ fontSize: 40, color: '#007bff' }} />
            <Typography variant="h5" color="primary" gutterBottom>
              Data Security
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default About;
