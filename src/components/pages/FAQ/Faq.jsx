import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const faqData = [
    {
      question: 'What is web domain and hosting?',
      answer:
        'A web domain is the address of a website, like www.example.com, while web hosting is the service that stores the website\'s files and makes it accessible online.',
    },
    {
      question: 'Which server is best for websites linux or windows?',
      answer:
        'Linux servers are more popular for hosting websites due to their stability, performance, and cost-effectiveness, while Windows servers are suitable for websites that require .NET framework.',
    },
    {
      question: 'Google cloud or Amazon server which one is best and fast?',
      answer:
        'Both Google Cloud and Amazon Web Services (AWS) are highly reliable, but Google Cloud excels in performance for data analysis, while AWS offers a wider range of services and global infrastructure.',
    },
    {
      question: 'Why Organic SEO is important for all businesses?',
      answer:
        'Organic SEO improves a website\'s visibility in search engines without paid ads, helping businesses attract long-term, high-quality traffic and build trust with potential customers.',
    },
  ];

const FaqSection = () => {
  return (
    <div id="FAQ">
    <Box sx={{ margin: 'auto', textAlign: 'center', backgroundColor: "#0B0F1A" }}>
      <Grid sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      {/* Title */}
      <Typography variant="h4" sx={{ color: '#1565c0', fontWeight: 'bold' }}>
        FAQ's
      </Typography>
      <Typography variant="subtitle1" sx={{ color: '#d2691e', mb: 3 }}>
      Find answers to common questions in our FAQ section.
      </Typography>

      {/* FAQ List */}
      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ boxShadow: 'none', mb: 1 , backgroundColor: "#0B0F1A", maxWidth: "1000px"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#888', }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ArrowCircleRightIcon sx={{ color: '#1565c0', mr: 1 }} />
              <Typography sx={{ fontWeight: '500', color: '#1565c0' }}>
                {faq.question}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left', color: '#555' }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </Grid>
    </Box>
    </div>
  );
};

export default FaqSection;
