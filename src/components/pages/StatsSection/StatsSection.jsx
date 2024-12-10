import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const StatsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0b0f1a',
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
                  232
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Happy Clients
                </Typography>
                <Typography variant="body2">consequuntur quae diredo</Typography>
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
                  521
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Completed Projects
                </Typography>
                <Typography variant="body2">adipisci atque quia aut</Typography>
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
                  453
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Hours Of Support
                </Typography>
                <Typography variant="body2">aut commodi quaerat</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsSection;
