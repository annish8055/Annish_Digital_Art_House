import React from 'react';
import { Typography, List, ListItem, Grid,Link } from '@material-ui/core';
import { Box } from '@mui/material';
import WorkIcon from '@material-ui/icons/Work';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SendIcon from '@material-ui/icons/Send';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaidIcon from '@mui/icons-material/Paid';
import whatsApp from '../../assets/WhatsApp-Logo.wine.svg'
import SkypeIcon from '../../assets/icons8-skype-500.svg';
import DiscordIcon from '../../assets/icons8-discord-500.svg';
import Fiverr from '../../assets/icons8-fiverr-480.svg';
import Upwork from '../../assets/icons8-upwork-500.svg';




export const OrderSection: React.FC = () => {
  
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="95vh" sx={{color:'white'}}>
    <div>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">Work Flow</Typography>
        <Typography variant="body1">
         My normal work flow contains 4 stages:
        </Typography>
        <List>
          <ListItem><Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'left', p: 1, bgcolor: '#303030', borderRadius: 8, mx: -1.5, mb: -1.5}}>
        <WorkIcon color="primary" />
        <Typography variant="body1">
          <strong>Stage 1:</strong> Collect Information & Understand Requirements
        </Typography>
      </Box></ListItem>
          <ListItem> <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'left', p: 2, bgcolor: '#303030', borderRadius: 8, mx: -1.5, mb: -1.5 }}>
        <EditIcon color="primary" />
        <Typography variant="body1">
          <strong>Stage 2:</strong> Create Rough Idea & Get Feedback
        </Typography>
      </Box></ListItem>
          <ListItem><Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'left', p: 2, bgcolor: '#303030', borderRadius: 8, mx: -1.5, mb: -1.5 }}>
        <CheckCircleIcon color="primary" />
        <Typography variant="body1">
          <strong>Stage 3:</strong> Refine Idea & Finalize Design
        </Typography>
      </Box></ListItem>
          <ListItem><Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'left', p: 2, bgcolor: '#303030', borderRadius: 8, mx: -1.5, mb: -1.5}}>
        <SendIcon color="primary" />
        <Typography variant="body1">
          <strong>Stage 4:</strong> Deliver Final Version
        </Typography>
      </Box></ListItem>
         </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">Payment Steps</Typography>
        <Typography variant="body1">
          Payment process consists of the following steps:
        </Typography>
        <List>
          <ListItem><Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'left', p: 1.6, bgcolor: '	#282828',opacity: 1, borderRadius: 8, mx: -1.5, mb: -1.5}}>
        <PaymentIcon color="primary" />
        <Typography variant="body1">
        <strong>Step 1: Initial Payment</strong><br /> 30% advance payment required to initiate project.
        </Typography>
      </Box></ListItem>
          <ListItem><Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'left', p: 1.6, bgcolor: '	#282828', borderRadius: 8, mx: -1.5, mb: -1.5}}>
        <PaymentsIcon color="primary" />
        <Typography variant="body1">
        <strong>Step 2: Milestone Payment</strong><br /> 20% payment requested upon line-art delivery.
        </Typography>
      </Box></ListItem>
          <ListItem><Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'left', p: 1.6, bgcolor: '	#282828', borderRadius: 8, mx: -1.5, mb: -1.5}}>
        <PaidIcon color="primary" />
        <Typography variant="body1">
        <strong>Step 3: Final Payment and Approval</strong><br /> Final version shared upon full payment.
        </Typography>
      </Box></ListItem>
        </List>
      </Grid>
    </Grid>
<br />
<br />
<Box color="white" sx={{ alignItems: 'center', p: 0, backgroundColor: 'rgba(0,0,0,0.4)' , borderRadius: 8, mx: -1.5, mb: -1.5}}>
      <Typography variant="h4" align="center" gutterBottom ><b>Let's Connect</b></Typography></Box>
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" gutterBottom>
            <b>For direct projects:</b>
            </Typography>
            
            <List>
              
            <Box display="flex" alignItems="center" mt={1}>
              <Link href="https://join.skype.com/invite/s2xv4n2Aan44" target="_blank" rel="noopener noreferrer">
                <img src={SkypeIcon} alt="Skype Link" width={44} height={44} />
              </Link>
              <Box mx={2}>
                <Link href="https://wa.me/+919831967432" target="_blank" rel="noopener noreferrer">
                <img src={whatsApp} alt="whatsApp Link" width={54} height={54} />
                </Link>
              </Box>
              <Link href="https://discord.gg/AFxtBh7u" target="_blank" rel="noopener noreferrer">
                <img src={DiscordIcon} alt="Discord Link" width={44} height={44} />
              </Link>
            </Box>
            
            </List>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" gutterBottom>
              <b>Through third pary:</b>
            </Typography>
            <List>
            <Box display="flex" alignItems="center" mt={1}>
              <Link href="https://www.fiverr.com/annish_kumar?up_rollout=true" target="_blank" rel="noopener noreferrer">
                <img src={Fiverr} alt="Fiverr Link" width={44} height={44} />
              </Link>
              <Box mx={2}>
              <Link href="https://www.upwork.com/freelancers/~01b88ffe5dcde734ce" target="_blank" rel="noopener noreferrer">
                <img src={Upwork} alt="upwork Link" width={44} height={44} />
              </Link>
              </Box>
            </Box>
            </List>
          </Grid>
        </Grid>
  </div>
  <br />
  </Box>
  );
};
