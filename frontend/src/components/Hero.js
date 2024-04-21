import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import content from '../assets/images/carsharing-content.png';

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        display: { xs: 'none', md: 'block' }, // Hide on small screens, display on medium screens and up
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 14, sm: 15 },
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '800px', // Set your desired maximum width
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={content}
              alt="content"
              style={{ width: '100%', display: 'block' }}
            />
          </Box>
        </div>
      </Container>
    </Box>
  );
}

export default Hero;