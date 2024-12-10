import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { Lightbulb, AttachMoney, SupportAgent, LocalShipping, Description, AccountTree } from "@mui/icons-material";

const features = [
  { icon: <Description fontSize="large" color="primary" />, title: "Experience", description: "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: <Lightbulb fontSize="large" color="primary" />, title: "Products", description: "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: <AccountTree fontSize="large" color="primary" />, title: "Approach", description: "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: <AttachMoney fontSize="large" color="primary" />, title: "Pricing", description: "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: <LocalShipping fontSize="large" color="primary" />, title: "Delivery", description: "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: <SupportAgent fontSize="large" color="primary" />, title: "Support", description: "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const WhyChooseUs = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 5,  mb: 10}}>
      {/* Heading */}
      <Typography variant="h4" color="primary" gutterBottom>
        Why Choose Us
      </Typography>
      {/* <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Lorem ipsum dolor sit amet
      </Typography> */}

      {/* Content Grid */}
      <Grid container spacing={3} alignItems="center">
        {/* Left Side Features */}
        <Grid item xs={12} md={4}>
          {features.slice(0, 3).map((feature, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              {feature.icon}
              <Box sx={{ ml: 2 , backgroundColor: '#fff', borderRadius: '5px', padding: '10px'}}>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Center Image */}
        <Grid item xs={10} md={4} sx={{display: "flex", justifyContent: "center"}}>
          <img
            src="/images/home/features.jpg"
            alt="Why Choose Us"
            style={{ maxWidth: "60%", height: "auto" }}
          />
        </Grid>

        {/* Right Side Features */}
        <Grid item xs={12} md={4}>
          {features.slice(3).map((feature, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              {feature.icon}
              <Box sx={{ ml: 2 ,  backgroundColor: '#fff', borderRadius: '5px', padding: '10px'}}>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
