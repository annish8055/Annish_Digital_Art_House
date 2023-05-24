import { Dialog, DialogTitle, DialogContent, IconButton,Box, Paper} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from 'react-material-ui-carousel'
import bimage1 from "../../../assets/bighead/1.png";
import bimage2 from "../../../assets/bighead/Bernard.png";
import bimage3 from "../../../assets/bighead/Big222.png";
import bimage4 from "../../../assets/bighead/Darren.png";
import bimage5 from "../../../assets/bighead/Final.png";
import bimage6 from "../../../assets/bighead/GroupFinal3.png";
import bimage7 from "../../../assets/bighead/LuciaFinal3.png";
import bimage8 from "../../../assets/bighead/UlyssaFinal1.png";
import bimage9 from "../../../assets/bighead/biden.png";
import bimage10 from "../../../assets/bighead/cover2.png";
import bimage11 from "../../../assets/bighead/klarenzFinal2.png";
import bimage12 from "../../../assets/bighead/mg1.png";
import bimage13 from "../../../assets/bighead/Podcasts.png";

interface BigHeadPopupprops {
  val : string;
  open: boolean;
  onClose: () => void;
}

const BigHeadPopup: React.FC<BigHeadPopupprops> = ({val, open, onClose }) => {
  console.log(val);
  const images = [
        {
            id:"1",
            image:bimage1
        },
        {
            id:"2",
            image:bimage2
        },
        {
            id:"3",
            image:bimage3
        },
        {
            id:"4",
            image:bimage4
        },
        {
            id:"5",
            image:bimage5
        },
        {
            id:"6",
            image:bimage6
        },
        {
          id:"7",
          image:bimage7
      },
      {
        id:"8",
        image:bimage8
    },
    {
      id:"9",
      image:bimage9
  },
  {
    id:"10",
    image:bimage10
}
,{
  id:"11",
  image:bimage11
},
{
  id:"12",
  image:bimage12
},
{
  id:"13",
  image:bimage13
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

export default BigHeadPopup;
