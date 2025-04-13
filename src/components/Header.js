import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold'
            }}
          >
            JayMakesVideos Blog
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
            Home
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;