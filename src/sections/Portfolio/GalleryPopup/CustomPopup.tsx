import { Dialog, DialogTitle, DialogContent, IconButton,Box, Paper} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from 'react-material-ui-carousel';
import nsimage1 from "../../../assets/Custom/CARDView2 - Copy.png";
import nsimage2 from "../../../assets/Custom/ElephantHybridColor1.png";
import nsimage3 from "../../../assets/Custom/FinalAlurita4.png";
import nsimage4 from "../../../assets/Custom/FinalArt1.png";
import nsimage25 from "../../../assets/Custom/GroguFinal.png";
import nsimage27 from "../../../assets/Custom/Model1.png";
import nsimage8 from "../../../assets/Custom/Model4.png";
import nsimage9 from "../../../assets/Custom/PanelSample.png";
import nsimage10 from "../../../assets/Custom/Pose1Finalupdated4.png";
import nsimage11 from "../../../assets/Custom/ShriGanesh.png";
import nsimage12 from "../../../assets/Custom/Understanding Your Light Source2.png";
import nsimage13 from "../../../assets/Custom/Yoda with Bob Marley.png";
import nsimage14 from "../../../assets/Custom/babay.png";
import nsimage15 from "../../../assets/Custom/cardView3 - Copy - Copy.png";
import nsimage16 from "../../../assets/Custom/devilFinal.png";
import nsimage17 from "../../../assets/Custom/fianl1.1.png";
import nsimage18 from "../../../assets/Custom/fianlHalfBody1.1.png";
import nsimage19 from "../../../assets/Custom/final.png";
import nsimage20 from "../../../assets/Custom/final1.png";
import nsimage21 from "../../../assets/Custom/logoViewUpdated2.png";
import nsimage22 from "../../../assets/Custom/poroniec.png";
import nsimage23 from "../../../assets/Custom/qallupiluit.png";
import nsimage24 from "../../../assets/Custom/sadhu1.png";
import nsimage5 from "../../../assets/Custom/siren.png";
import nsimage7 from "../../../assets/Custom/elf - Copy.png";
import nsimage28 from "../../../assets/Custom/lady.png";
import nsimage29 from "../../../assets/Custom/santaPng1.png";
import nsimage30 from "../../../assets/Custom/towerCardView.png";
import nsimage31 from "../../../assets/Custom/FinalUpdated.png";

interface CustomPopupprops {
  val : string;
  open: boolean;
  onClose: () => void;
}

const CustomPopup: React.FC<CustomPopupprops> = ({val, open, onClose }) => {
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
},
{
  id:"25",
  image:nsimage25
},
{
  id:"27",
  image:nsimage27
},
{
  id:"28",
  image:nsimage28
},
{
  id:"29",
  image:nsimage29
},
{
  id:"30",
  image:nsimage30
},
{
  id:"31",
  image:nsimage31
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

export default CustomPopup;
