import { Dialog, DialogTitle, DialogContent, IconButton,Box, Paper} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from 'react-material-ui-carousel';
import nsimage1 from "../../../assets/nsfw/new1.png";
import nsimage2 from "../../../assets/nsfw/10.png";
import nsimage3 from "../../../assets/nsfw/12.png";
import nsimage4 from "../../../assets/nsfw/1.png";
import nsimage5 from "../../../assets/nsfw/1transparent.png";
import nsimage7 from "../../../assets/nsfw/2transparent.png";
import nsimage8 from "../../../assets/nsfw/3.png";
import nsimage9 from "../../../assets/nsfw/4.png";
import nsimage10 from "../../../assets/nsfw/55.png";
import nsimage11 from "../../../assets/nsfw/6.png";
import nsimage12 from "../../../assets/nsfw/7.png";
import nsimage13 from "../../../assets/nsfw/7transparent.png";
import nsimage14 from "../../../assets/nsfw/9.png";
import nsimage15 from "../../../assets/nsfw/Final2.png";
import nsimage16 from "../../../assets/nsfw/final.png";
import nsimage17 from "../../../assets/nsfw/sourceFile2.png";
import nsimage18 from "../../../assets/nsfw/sourceFile3.png";
import nsimage19 from "../../../assets/nsfw/final1 - Copy.png";
import nsimage20 from "../../../assets/nsfw/starCardSoft.png";
import nsimage21 from "../../../assets/nsfw/sunCard.png";
import nsimage22 from "../../../assets/nsfw/womaninWaterCardNude.png";
import nsimage23 from "../../../assets/nsfw/new2.png";
import nsimage24 from "../../../assets/nsfw/13.png";

interface NSFWPopupprops {
  val : string;
  open: boolean;
  onClose: () => void;
}

const NSFWPopup: React.FC<NSFWPopupprops> = ({val, open, onClose }) => {
  console.log(val);
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
},
{
  id:"14",
  image:nsimage14
},
{
  id:"15",
  image:nsimage15
},
{
  id:"16",
  image:nsimage16
},
{
  id:"17",
  image:nsimage17
},
{
  id:"18",
  image:nsimage18
},
{
  id:"19",
  image:nsimage19
},
{
  id:"20",
  image:nsimage20
},
{
  id:"21",
  image:nsimage21
},
{
  id:"22",
  image:nsimage22
},
{
  id:"23",
  image:nsimage23
},
{
  id:"24",
  image:nsimage24
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
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{maxWidth: '100%', height: '75Vh' }}>
              <img src={review.image} alt="avatar" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </Box>
            </Paper>
          </Box>
        ))}
        </Carousel>
      </DialogContent>
 
    </Dialog>
  );
};

export default NSFWPopup;
