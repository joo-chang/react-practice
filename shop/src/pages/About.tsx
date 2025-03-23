import React from 'react';
import { Typography, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        This is the about us page.
      </Typography>
      <Outlet></Outlet>
    </Box>
  );
};
