import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton,Box, Paper} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from 'react-material-ui-carousel'
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      width: '80%', // Adjust as needed
      height: '80%', // Adjust as needed
      outline: 'none',
      overflow: 'auto',
    },
  }));

const Popup: React.FC<PopupProps> = ({ open, onClose }) => {
    const images = [
        {
            id:"1",
            image:image1
        },
        {
            id:"2",
            image:image2
        },
        {
            id:"3",
            image:image3
        },
        {
            id:"4",
            image:image4
        },
        {
            id:"5",
            image:image5
        },
        {
            id:"6",
            image:image6
        }
    ]
        
    const classes = useStyles();

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
        <IconButton
          sx={{ position: "absolute", right: 8, top: 8, color: "#0000008A" }}
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <br />

        <DialogTitle style={{color:'white'}}>
        Popup Content
      </DialogTitle>
      <DialogContent>
      <div className={classes.paper}>
              <Carousel>
        {images.map((review) => (
          <Box key={review.id} p={2} textAlign="center" sx={{color:'white'}}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <img src={review.image} className="img-fluid" alt="avatar" width="100%" height="100%" />
              </Box>
            </Paper>
          </Box>
        ))}
        </Carousel>
        </div>
      </DialogContent>
 
    </Dialog>
  );
};

export default Popup;
