import { Dialog, DialogTitle, DialogContent, IconButton,Box, Paper} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from 'react-material-ui-carousel';
import nsimage1 from "../../../assets/Backgrounds/BG10.png";
import nsimage2 from "../../../assets/Backgrounds/BG11.png";
import nsimage3 from "../../../assets/Backgrounds/BG12.png";
import nsimage4 from "../../../assets/Backgrounds/BG1_Final.png";
import nsimage5 from "../../../assets/Backgrounds/BG1_Finalvvv (1).png";
import nsimage7 from "../../../assets/Backgrounds/BG1_Finalvvv (2).png";
import nsimage8 from "../../../assets/Backgrounds/BG2_Final.png";
import nsimage9 from "../../../assets/Backgrounds/BG7.png";
import nsimage10 from "../../../assets/Backgrounds/BG8.png";
import nsimage11 from "../../../assets/Backgrounds/BG9.png";
import nsimage12 from "../../../assets/Backgrounds/tttt (1).png";
import nsimage13 from "../../../assets/Backgrounds/tttt (2).png";

interface BackgroundPopupprops {
  val : string;
  open: boolean;
  onClose: () => void;
}

const BackgroundPopup: React.FC<BackgroundPopupprops> = ({val, open, onClose }) => {
  const images = [
    {
        id:"1",
        image:nsimage1
    },
    {
        id:"2",
        image:nsimage2
    },
    {
        id:"3",
        image:nsimage3
    },
    {
        id:"4",
        image:nsimage4
    },
    {
        id:"5",
        image:nsimage5
    },
    {
      id:"7",
      image:nsimage7
  },
  {
    id:"8",
    image:nsimage8
},
{
  id:"9",
  image:nsimage9
},
{
  id:"10",
  image:nsimage10
},
{
  id:"11",
  image:nsimage11
},
{
  id:"12",
  image:nsimage12
},
{
  id:"13",
  image:nsimage13
}
]


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

        <DialogTitle>
        Past Projects:
      </DialogTitle>
      <DialogContent>
              <Carousel>
        {images.map((review) => (
          <Box key={review.id} p={2} textAlign="center">
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <img src={review.image} alt="avatar" style={{ maxWidth: '100%', height: '75Vh' }} />
              </Box>
            </Paper>
          </Box>
        ))}
        </Carousel>
      </DialogContent>
 
    </Dialog>
  );
};

export default BackgroundPopup;
