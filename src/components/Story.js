import { Button, CardContent, CardMedia, Container, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import React from 'react';
import "./Story.css";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

const Story = () => {
  return (
    <Container className='storyContainer'>
        <Typography variant="h4">
            Member stories
        </Typography>
        <br></br>
      <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item >
            <Container  sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow:0,padding:'1px' }}>
        {/* Card Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: '40%' }, // Full width on small screens, 40% on medium and larger
            height: 200,
            objectFit: 'cover',
          }}
          image="https://picsum.photos/seed/picsum/200/300" // Replace with your image URL
          alt="Sample Image"
        />
        {/* Card Content */}
     
     <CardContent 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            textAlign:"left",
            padding: 1,
            width: { xs: '100%', md: '60%' }, // Full width on small screens, 60% on medium and larger
          }}
        >
          <Typography variant="h5" fontWeight={600} color='black' className='nameFormatstyle'  gutterBottom>
            John story's 
          </Typography>
          <Typography variant="h6" fontSize={14} color="text.secondary" paragraph>
            This is a description of the content card. It provides an overview or some details about the content.
            <br></br>
            <br></br>

            <Link variant='h6' fontSize={15} boxShadow={1} borderRadius={2} padding={1}  fontWeight={300}  color='gray' underline='none'>
            Read more
                </Link>
          </Typography>
        </CardContent>

      </Container>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Story