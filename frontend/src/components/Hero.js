import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import content from '../assets/images/carsharing-content.png'

export default function Hero() {
  return (
    <Box
      id="hero"
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
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
              width: '50%',
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