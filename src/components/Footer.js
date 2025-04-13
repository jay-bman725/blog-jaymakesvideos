import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" color="text.primary" gutterBottom>
          About The Blog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is my personal blog for my social media presence, JayMakesVideos.
          I share my thoughts, experiences, and creative journey here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;