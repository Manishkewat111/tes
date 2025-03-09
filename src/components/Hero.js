import * as React from 'react';
import {  CardMedia, CardContent, Typography, Box, Button, Container } from '@mui/material';
import "./Hero.css"

const Hero = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow:0,padding:'10px' }}>
        {/* Card Content */}
     
     <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 2,
            width: { xs: '100%', md: '60%' }, // Full width on small screens, 60% on medium and larger
          }}
        >
          <Typography variant="h3" gutterBottom>
            Centeral Taxas <br></br>
             Fly Finishing
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            This is a description of the content card. It provides an overview or some details about the content.
          </Typography>
          <Button className='getStartBtn'>Get Started</Button>

        </CardContent>
        {/* Card Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: '40%' }, // Full width on small screens, 40% on medium and larger
            height: 300,
            objectFit: 'cover',
          }}
          image="https://picsum.photos/seed/picsum/200/300" // Replace with your image URL
          alt="Sample Image"
        />

      


      </Container>
  )
}

export default Hero