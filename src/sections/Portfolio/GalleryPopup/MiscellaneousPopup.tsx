import { Dialog, DialogTitle, DialogContent, IconButton,Box, Paper} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from 'react-material-ui-carousel';
import mimage1 from "../../../assets/Miscellaneous/AditiCharacterSheet1.png";
import mimage2 from "../../../assets/Miscellaneous/Aiatar1.png";
import mimage3 from "../../../assets/Miscellaneous/Black Demon.png";
import mimage4 from "../../../assets/Miscellaneous/Final2DeviantArt.png";
import mimage5 from "../../../assets/Miscellaneous/FinalBD.png";
import mimage7 from "../../../assets/Miscellaneous/IMG_20211227_094419 - Copy.jpg";
import mimage8 from "../../../assets/Miscellaneous/IMG_20211227_095217.jpg";
import mimage23 from "../../../assets/Miscellaneous/IMG_20211229_115723.jpg";
import mimage10 from "../../../assets/Miscellaneous/IMG_20220117_102621.jpg";
import mimage11 from "../../../assets/Miscellaneous/dedlkd9-1c30f71a-8340-4f0a-9ff7-f27e7c24345f.png";
import mimage12 from "../../../assets/Miscellaneous/evil_horse_by_ann2000wat_deaj0op-fullview.jpg";
import mimage13 from "../../../assets/Miscellaneous/evil_wolf_by_ann2000wat_deaffz1-fullview.jpg";
import mimage14 from "../../../assets/Miscellaneous/fin2.png";
import mimage15 from "../../../assets/Miscellaneous/finalWhiteBG - Copy.png";
import mimage16 from "../../../assets/Miscellaneous/krishnapng.png";
import mimage17 from "../../../assets/Miscellaneous/laal1.png";
import mimage18 from "../../../assets/Miscellaneous/p11.png";
import mimage19 from "../../../assets/Miscellaneous/sampleCoverPage_FInalUpdatedv2.png";
import mimage20 from "../../../assets/Miscellaneous/sampleCoverPage_LineArt2.png";
import mimage21 from "../../../assets/Miscellaneous/temp1.png";
import mimage22 from "../../../assets/Miscellaneous/updated1.png";
import mimage9 from "../../../assets/Miscellaneous/warriorFinal1V1.png";

interface NSFWPopupprops {
  val : string;
  open: boolean;
  onClose: () => void;
}

const NSFWPopup: React.FC<NSFWPopupprops> = ({val, open, onClose }) => {
  const images = [
    {
        id:"1",
        image:mimage1
    },
    {
        id:"2",
        image:mimage2
    },
    {
        id:"3",
        image:mimage3
    },
    {
        id:"4",
        image:mimage4
    },
    {
        id:"5",
        image:mimage5
    },
    {
      id:"7",
      image:mimage7
  },
  {
    id:"8",
    image:mimage8
},
{
  id:"9",
  image:mimage9
},
{
  id:"10",
  image:mimage10
},
{
  id:"11",
  image:mimage11
},
{
  id:"12",
  image:mimage12
},
{
  id:"13",
  image:mimage13
},
{
  id:"14",
  image:mimage14
},
{
  id:"15",
  image:mimage15
},
{
  id:"16",
  image:mimage16
},
{
  id:"17",
  image:mimage17
},
{
  id:"18",
  image:mimage18
},
{
  id:"19",
  image:mimage19
},
{
  id:"20",
  image:mimage20
},
{
  id:"21",
  image:mimage21
},
{
  id:"22",
  image:mimage22
},
{
  id:"23",
  image:mimage23
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

export default NSFWPopup;
