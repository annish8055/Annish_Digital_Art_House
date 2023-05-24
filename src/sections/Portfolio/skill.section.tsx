import React, { useState } from "react";
import { Button,Typography } from "@mui/material";
import NSFWPopup from "./GalleryPopup/NSFWPopup";
import BigHeadPopup from "./GalleryPopup/BigHeadPopup";
import MiscellaneousPopup from "./GalleryPopup/MiscellaneousPopup";
import CustomPopup from "./GalleryPopup/CustomPopup";
import BackgroundPopup from "./GalleryPopup/BackgroundPopup";
import LogoPopup from "./GalleryPopup/LogoPopup";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { Grid, Paper } from "@material-ui/core";
import image1 from "../../assets/bighead/LuciaFinal3.png";
import image2 from "../../assets/Custom/GroguFinal.png";
import image3 from "../../assets/logo/WarriorFrontV2.png";
import image4 from "../../assets/Backgrounds/BG12.png";
import image5 from "../../assets/nsfw/5.png";
import image6 from "../../assets/Miscellaneous/sampleCoverPage_FInalUpdatedv2.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "right",
    alignItems: "right",
    minHeight: "60vh",
    color:'white',
  },
  paper: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "right",
    alignItems: "right",
    border: "1px solid black",
  },
  centerButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

const Box = ({ imageSrc }: { imageSrc: string }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <img src={imageSrc} alt="Box" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </Paper>
  );
};

export const SkillsSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);

  const openPopup1 = () => {
    setShowPopup1(true);
  };

  const closePopup1 = () => {
    setShowPopup1(false);
  };
  const openPopup2 = () => {
    setShowPopup2(true);
  };

  const closePopup2 = () => {
    setShowPopup2(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup3 = () => {
    setShowPopup3(true);
  };

  const closePopup3 = () => {
    setShowPopup3(false);
  };

  const openPopup4 = () => {
    setShowPopup4(true);
  };

  const closePopup4 = () => {
    setShowPopup4(false);
  };

  const openPopup5 = () => {
    setShowPopup5(true);
  };

  const closePopup5 = () => {
    setShowPopup5(false);
  };

  const classes = useStyles();

  return (
    <>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color:'white'}}>
    <h1> Portfolio </h1>
</div>
      <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={6} md={4} >
        <motion.div  whileHover={{ scale: 1.2 }}   whileTap={{ scale: 2 }}  >
        <div className={classes.centerButton}>
          <Button component="div" disableRipple onClick={openPopup1}><Box imageSrc={image1} /> 
      </Button>
      </div>
      <Typography variant="body1" align="center" gutterBottom>
        <b> Big Head cartoon</b>
        </Typography>
      </motion.div>
      <BigHeadPopup val ={"bighead"} open={showPopup1} onClose={closePopup1} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <motion.div  whileHover={{ scale: 1.2 }}   whileTap={{ scale: 2 }}  >
          <div className={classes.centerButton}>
          <Button component="div" disableRipple onClick={openPopup2}><Box imageSrc= {image2} /> 
      </Button>
      </div>
      <Typography variant="body1" align="center" gutterBottom>
      <b> Custom</b>
        </Typography>
      </motion.div>
      <CustomPopup val ={"Custom"} open={showPopup2} onClose={closePopup2} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <motion.div  whileHover={{ scale: 1.2 }}   whileTap={{ scale: 2 }}  >
          <div className={classes.centerButton}>
          <Button component="div" disableRipple onClick={openPopup3}><Box imageSrc={image3} /> 
      </Button>
      </div>
      <Typography variant="body1" align="center" gutterBottom>
      <b> Logo/Flyers</b>
        </Typography>
      </motion.div>
      <LogoPopup val ={"logo"} open={showPopup3} onClose={closePopup3} />
          </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <motion.div  whileHover={{ scale: 1.2 }}   whileTap={{ scale: 2 }}  >
        <div className={classes.centerButton}>
          <Button component="div" disableRipple onClick={openPopup4}><Box imageSrc={image4} /> 
      </Button>
      </div>
      <Typography variant="body1" align="center" gutterBottom>
      <b>Backgrounds</b>
        </Typography>
      </motion.div>
      <BackgroundPopup val ={"Backgrounds"} open={showPopup4} onClose={closePopup4} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>            
          <motion.div  whileHover={{ scale: 1.2 }}   whileTap={{ scale: 2 }}  >
          <div className={classes.centerButton}>
          <Button component="div" disableRipple onClick={openPopup5}><Box imageSrc={image5} /> 
      </Button>
      </div>
      <Typography variant="body1" align="center" gutterBottom>
      <b> NSFW</b>
        </Typography>
        </motion.div>
      <NSFWPopup val ={"nsfw"} open={showPopup5} onClose={closePopup5} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>            
          <motion.div  whileHover={{ scale: 1.2 }}   whileTap={{ scale: 2 }}  >
          <div className={classes.centerButton}>
          <Button component="div" disableRipple onClick={openPopup}><Box imageSrc={image6} /> 
      </Button>      
      </div>
      <Typography variant="body1" align="center" gutterBottom>
      <b>Miscellaneous</b>
        </Typography>
        </motion.div>
      <MiscellaneousPopup val ={"Miscellaneous"} open={showPopup} onClose={closePopup} />
          </Grid>
        </Grid>

    </div>
    </>
  );
};
