import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const StatsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0B0F1A',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        

        {/* Right Section - Stats */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4} justifyContent="center">
            {/* Stat 1 */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  color: '#ffffff',
                }}
              >
                <PeopleAltOutlinedIcon sx={{ fontSize: '4rem', color: '#1e90ff' }} />
                <Typography variant="h4" sx={{ color: '#1e90ff' }}>
                  4+
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Happy Clients
                </Typography>
                <Typography variant="body2" sx={{color: "#4E8CF9"}}>Delivering quality work that keeps our clients happy and satisfied.</Typography>
              </Box>
            </Grid>

            {/* Stat 2 */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  color: '#ffffff',
                }}
              >
                <BarChartOutlinedIcon sx={{ fontSize: '4rem', color: '#1e90ff' }} />
                <Typography variant="h4" sx={{ color: '#1e90ff' }}>
                  10+
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Completed Projects
                </Typography>
                <Typography variant="body2" sx={{color: "#4E8CF9"}}>Explore our completed projects showcasing our dedication and expertise</Typography>
              </Box>
            </Grid>

            {/* Stat 3 */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  textAlign: 'center',
                  color: '#ffffff',
                }}
              >
                <SettingsOutlinedIcon sx={{ fontSize: '4rem', color: '#1e90ff' }} />
                <Typography variant="h4" sx={{ color: '#1e90ff' }}>
                  24
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Hours Of Support
                </Typography>
                <Typography variant="body2" sx={{color: "#4E8CF9"}}>Providing reliable support whenever you need it, 24/7.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsSection;
