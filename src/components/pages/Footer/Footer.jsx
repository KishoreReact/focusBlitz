import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Send,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
    <Box sx={{ backgroundColor: "#0B0F1A", color: "#FFFFFF", p: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Left Side */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" sx={{ color: "#4E8CF9", fontWeight: "bold" }}>
            Focuz<span style={{ color: "#fff" }}>Blitz</span>
          </Typography>
          <Typography sx={{ mt: 2 }}>
          Your trusted partner for web and mobile app development and comprehensive maintenance services. 
          </Typography>
          <Typography sx={{ mt: 2 }}>Follow us</Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </Box>
        </Grid>

        {/* Services */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ color: "#4E8CF9", mb: 2 }}>
            Services
          </Typography>
          {[
            "Web Design",
            "App Development",
            "Cloud Services",
            "Domain And Hosting",
            "SEO Optimization",
            "Social Media",
          ].map((service, index) => (
            <Typography key={index} sx={{ mb: 1, cursor: "pointer" }}>
              {service}
            </Typography>
          ))}
        </Grid>

        {/* Information */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ color: "#4E8CF9", mb: 2 }}>
            Information
          </Typography>
          {[
            "About",
            "Pricing",
            "Team",
            "Portfolio",
            "FAQs",
            "Blogs",
            "Terms & Conditions",
            "Privacy Policy",
          ].map((info, index) => (
            <Typography key={index} sx={{ mb: 1, cursor: "pointer" }}>
              {info}
            </Typography>
          ))}
        </Grid>

        {/* Contacts */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: "#4E8CF9", mb: 2 }}>
            Contacts
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOn sx={{ mr: 1 }} /> Chittur Palakkad Road, Palakkad, Kerala 678534, INDIA
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Phone sx={{ mr: 1 }} /> +919048898225
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Email sx={{ mr: 1 }} /> focusblitzc@gmail.com
          </Box>

          {/* Newsletter */}
          <Typography variant="h6" sx={{ color: "#4E8CF9", mt: 2 }}>
            Newsletter
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Don't miss to subscribe to our new feeds, kindly fill the form below.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Email Address"
              size="small"
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "25px",
                flex: 1,
                mr: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4E8CF9",
                minWidth: "40px",
                borderRadius: "50%",
                "&:hover": { backgroundColor: "#2C6BCF" },
              }}
            >
              <Send />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{display: "flex", justifyContent: "center", backgroundColor: "#0B0F1A"}}>
      <Typography variant="h8" sx={{color: "#4E8CF9", mb: 2 }}>
    • Copyright ©2024 | All rights reserved •
    </Typography>
    </Box>
    </>
  );
};

export default Footer;
