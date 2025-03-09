import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { CardContent, CardMedia, Container, Link } from '@mui/material';
import "./Feature.css"

const Feature = () => {
  return (
    <div className='featureContainer'>
    <Container >
        
        <Typography variant="h3" gutterBottom>
            Featureed Options
          </Typography>
        <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Explore Fly Fishing </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow:0,padding:'10px' }}>
        {/* Card Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: '40%' }, // Full width on small screens, 40% on medium and larger
            height: 250,
            objectFit: 'cover',
          }}
          image="https://picsum.photos/seed/picsum/200/300" // Replace with your image URL
          alt="Sample Image"
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 2,
            width: { xs: '100%', md: '60%' }, // Full width on small screens, 60% on medium and larger
          }}
        >
            
          <Typography variant="h4" gutterBottom>
           Explore Fly Fishing
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            This is a description of the content card. It provides an overview or some details about the content.
            <br></br>
          <Link variant='h6' underline='none'> Learn More</Link>
          </Typography>

        </CardContent>
        </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Explore Fly Fishing </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow:0,padding:'10px' }}>
        {/* Card Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: '40%' }, // Full width on small screens, 40% on medium and larger
            height: 250,
            objectFit: 'cover',
          }}
          image="https://picsum.photos/seed/picsum/200/300" // Replace with your image URL
          alt="Sample Image"
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 2,
            width: { xs: '100%', md: '60%' }, // Full width on small screens, 60% on medium and larger
          }}
        >
            
          <Typography variant="h4" gutterBottom>
           Explore Fly Fishing
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            This is a description of the content card. It provides an overview or some details about the content.
            <br></br>
          <Link variant='h6' underline='none'> Learn More</Link>
          </Typography>

        </CardContent>
        </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Explore Fly Fishing </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow:0,padding:'10px' }}>
        {/* Card Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: '40%' }, // Full width on small screens, 40% on medium and larger
            height: 250,
            objectFit: 'cover',
          }}
          image="https://picsum.photos/seed/picsum/200/300" // Replace with your image URL
          alt="Sample Image"
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 2,
            width: { xs: '100%', md: '60%' }, // Full width on small screens, 60% on medium and larger
          }}
        >
            
          <Typography variant="h4" gutterBottom>
           Explore Fly Fishing
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            This is a description of the content card. It provides an overview or some details about the content.
            <br></br>
          <Link variant='h6' underline='none'> Learn More</Link>
          </Typography>

        </CardContent>
        </Container>
        </AccordionDetails>
      </Accordion>
      
    </Container>
    </div>
  )
}

export default Feature