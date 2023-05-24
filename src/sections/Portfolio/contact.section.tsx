import React, { useState, FormEvent , useRef } from 'react';
import { TextField, Button, Grid, Link, makeStyles,Typography, Box, Container } from '@material-ui/core';
import { Alert } from "@mui/material";
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import youtube from '../../assets/icons8-youtube-480.svg';
import instagram from '../../assets/icons8-instagram-240.svg';
import Upwork from "../../assets/icons8-upwork-500.svg";
import Fiverr from '../../assets/icons8-fiverr-480.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  formContainer: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    color:'white'
  },
  imageContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
    },
  },
  customImage: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    margin: theme.spacing(1),
  },
  centerButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteOutline: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent white background

  },
}));

export const ContactSection: React.FC = () => {
  const form:any = useRef();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };
  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
      e.preventDefault();

      emailjs.sendForm('service_ceqfxfl', 'template_0g8etfc', form.current, '6_vI6O7nSsJdxk_hr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');

    // Show success message or perform any other actions
    console.log('Form submitted successfully!');
  };

  const classes = useStyles();

  return (
    <>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'white'}}>
    <h1> Share your queries </h1>
    </div>
    <Container style={{color:'white'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <form ref={form} onSubmit={handleSubmit} >
          <TextField
            label="Full Name"
            value={fullName}
            name="user_name"
            onChange={(e) => setFullName(e.target.value)}
            variant="outlined"
            margin="normal"
            className={classes.whiteOutline}
            required
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            className={classes.whiteOutline}
            required
            fullWidth
          />
          <TextField
            label="Phone / WhatsApp"
            value={phone}
            name="user_phone"
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            margin="normal"
            className={classes.whiteOutline}
            fullWidth
          />
          <TextField
            label="Message"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            margin="normal"
            className={classes.whiteOutline}
            required
            fullWidth
            multiline
            rows={4}
          />
{showAlert && (
        <Alert icon={<SendIcon fontSize="inherit" />} severity="success" onClose={() => setShowAlert(false)}>
          Message has been sent! Will respond back as soon as possible.
        </Alert>
      )}
          <Button type="submit" variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>

        </form>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box>
        <div className={classes.centerButton}>
          <h2>Contact details</h2>
        </div>
        <div className={classes.centerButton}>
          
        <Typography variant="h6">
          <EmailIcon sx={{ marginRight: '10px' }}/>       
          <strong>Email: </strong> ann2000wat@gmail.com
        </Typography>
        </div>
        
        <div className={classes.centerButton}>
          <br /><br /><br /><br />
        <Typography variant="h6">
          <PhoneIcon sx={{ marginRight: '10px' }}/>       
          <strong>Phone/WhatsApp: </strong> +91  9831967432 / +91 9108568120 
        </Typography>
        <br /><br /><br /><br />
              </div>
              <div className={classes.centerButton}>
              <Typography variant="h6">
          <LocationOnIcon sx={{ marginRight: '10px' }}/>       
          <strong>Address: </strong> 76/3 Tripura Roy lane, Salkia, Howrah, India
        </Typography>

              </div>

          </Box>
          <br />
          <br />
          <br />

      <Grid item className={classes.imageContainer}>

        <div>
          <Link href="https://www.youtube.com/@annishkumar/shorts" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="youtube Link" width={34} height={34} style={{paddingRight:"20px"}}/>
          </Link>
          <Link href="https://www.instagram.com/_annish_kumar_/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram Link" width={34} height={34} style={{paddingRight:"20px"}}/>
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01b88ffe5dcde734ce" target="_blank" rel="noopener noreferrer">
                <img src={Upwork} alt="upwork Link" width={34} height={34} style={{paddingRight:"20px"}}/>
              </Link>
          <Link href="https://www.fiverr.com/annish_kumar?up_rollout=true" target="_blank" rel="noopener noreferrer">
                <img src={Fiverr} alt="Fiverr Link" width={34} height={34} style={{paddingRight:"20px"}} />
              </Link>
          
        </div>
      </Grid>
      </Grid>
      </Grid>
    </Container>
    </>
  );
};
