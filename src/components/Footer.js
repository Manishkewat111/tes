import React from 'react'
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    
    <Box
    sx={{
      display: 'flex',
      width : '100vw',
      
    }}
  >
    {/* Main content */}
    <div
      component="main"
      sx={{
        flex: 1, // This makes the main content take up available space
        padding: 2,
      }}
    >
     </div>
    {/* Sticky footer */}
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: 2,
        textAlign: 'center',
        width: '100%',
        position: 'relative',
        bottom: 0,
        marginTop: 'auto', // Ensures footer stays at the bottom
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          paddingLeft:'15em',
          paddingRight:'15em'

        }}
      >
        {/* Left side links (FAQ, Contact, Privacy, Support) */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Link href="#" color="inherit" sx={{ fontSize: 14 }}>
            FAQ
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: 14 }}>
            Contact
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: 14 }}>
            Privacy
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: 14 }}>
            Support
          </Link>
        </Box>

        {/* Right side social media icons (Facebook, Instagram, LinkedIn) */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton href="https://facebook.com" target="_blank" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" color="inherit">
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        © 2025 My Company. All rights reserved.
      </Typography>
    </Box>
  </Box>
  )
}

export default Footer