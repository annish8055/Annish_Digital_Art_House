import React from 'react';
import { Box, Typography, Avatar, Container, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import feedbackData from './feedbackData.json';
import undermindfilms from '../../assets/undermindfilmsPng.png';
import ricardoperalez from '../../assets/ricardoperalez.png';
import leo_d25 from '../../assets/leo_d25.png';
import naughtybrooklyn from '../../assets/naughtybrooklyn.png';
import daredeverell from '../../assets/daredeverell.png';
import chriswilliam899 from '../../assets/chriswilliam899.png';
import seth1francesc from '../../assets/seth1francesc.png';
import JasperVanDerMade from '../../assets/JasperVanDerMade.png';


 export const TestimonialSection: React.FC = () => {
  const { reviews } = feedbackData;
  reviews[0].image = undermindfilms;
  reviews[1].image = ricardoperalez;
  reviews[2].image = undermindfilms;
  reviews[3].image = leo_d25;
  reviews[4].image = naughtybrooklyn;
  reviews[5].image = daredeverell;
  reviews[6].image = chriswilliam899;
  reviews[7].image = undermindfilms;
  reviews[8].image = seth1francesc;
  reviews[9].image = JasperVanDerMade;
  reviews[10].image = undermindfilms;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" sx={{color:'white'}}>
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Client Reviews
      </Typography>
      <br />
      <Carousel>
        {reviews.map((review) => (
          <Box key={review.id} p={2} textAlign="center" >
            <Paper elevation={3} sx={{ p: 2 }} style={{backgroundColor:'#303030'}}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{backgroundColor:'#303030',color:'white'}}>
                <Avatar src={review.image} alt={review.name} sx={{ width: 80, height: 80, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body1">{review.message}</Typography>
              </Box>
            </Paper>
          </Box>
        ))}
        </Carousel>
    </Container>
    </Box>
    );
  };
  
