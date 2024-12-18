import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { Lightbulb, AttachMoney, SupportAgent, LocalShipping, Description, AccountTree } from "@mui/icons-material";

const features = [
  { icon: <Description fontSize="large" color="primary" />, title: "Experience", description: "Our extensive IT experience empowers FocusBlitz to deliver innovative, scalable, and reliable technology solutions that drive business growth and digital transformation." },
  { icon: <Lightbulb fontSize="large" color="primary" />, title: "Products", description: "We deliver innovative and reliable IT products designed to streamline operations, enhance productivity, and drive business success with cutting-edge technology solutions tailored to your needs." },
  { icon: <AccountTree fontSize="large" color="primary" />, title: "Approach", description: "Our IT approach is designed to deliver a focused and innovative digital strategy, ensuring the with seamless functionality, user-centric design, and robust performance." },
  { icon: <AttachMoney fontSize="large" color="primary" />, title: "Pricing", description: "We offer transparent and flexible IT pricing solutions tailored to your business needs, ensuring cost-effectiveness without compromising on quality or performance." },
  { icon: <LocalShipping fontSize="large" color="primary" />, title: "Delivery", description: "We specialize in delivering innovative and reliable IT solutions that empower businesses to achieve their digital transformation goals with speed, precision, and excellence." },
  { icon: <SupportAgent fontSize="large" color="primary" />, title: "Support", description: "Discover how FocusBlitz provides exceptional IT support services to streamline operations, enhance productivity, and drive success for your business" },
];

const WhyChooseUs = () => {
  return (
    <Box  sx={{ textAlign: "center", py: 5,  backgroundColor: "#0B0F1A", display: "flex", flexDirection:"column", alignItems:"center"}}>
      {/* Heading */}
      <Typography variant="h3" color="primary" gutterBottom>
        Why Choose Us
      </Typography>
      {/* <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Lorem ipsum dolor sit amet
      </Typography> */}

      {/* Content Grid */}
      <Grid container spacing={3} alignItems="center" sx={{backgroundColor: "#0B0F1A", maxWidth: "1300px"}}>
        {/* Left Side Features */}
        <Grid item xs={12} md={4}>
          {features.slice(0, 3).map((feature, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 3, }}>
              <Box sx={{ ml: 2 , color: '#007bff', borderRadius: '5px', padding: '10px', backgroundColor: '#ffffff14'}}>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="#fff">
                  {feature.description}
                </Typography>
              </Box>
              {/* {feature.icon} */}
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
              {/* {feature.icon} */}
              <Box sx={{ ml: 2 ,  color: '#007bff', borderRadius: '5px', padding: '10px', backgroundColor: '#ffffff14'}}>
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2" color="#fff">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
