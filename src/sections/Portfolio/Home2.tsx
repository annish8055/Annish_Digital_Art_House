import {
  Container, Grid, Typography, Link,
} from '@mui/material';
import Tilt from "react-parallax-tilt";
import Youtube from "../../assets/icons8-youtube-480.svg";
import Instagram from "../../assets/icons8-instagram-240.svg";
import Fiverr from "../../assets/icons8-fiverr-480.svg";
import Upwork from "../../assets/icons8-upwork-500.svg";
import myImg from "../../assets/logo.png";
import Deviantart from "../../assets/icons8-deviantart-480.svg";

function Home2() {
  return (
    <Container style={{ paddingTop: '40px', color:'white' }}> 
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <h3 style={{ fontSize: "2em" }}>
              LET ME INTRODUCE MYSELF
            </h3>
            <Typography variant="body1">
              <span>
                As an experienced digital artist,
              </span>
              <br />
              <span>
                I specialize in <strong>character design</strong>, <strong>cartoon drawings</strong>, <strong>custom illustrations</strong>,
                <strong>bighead cartoons</strong>, <strong>logo designs</strong>, and <strong>flyer designs</strong>.
              </span>
              <br /><hr />
              <span>
                With a track record of working with over 100 clients, I bring a unique blend of <strong>creativity</strong> and <strong>professionalism</strong> to every project.
              </span>
              <br /><hr />
              <span>
                I am passionate about <strong>visual storytelling</strong> and strive to deliver exceptional work that captures the essence of each project.
              </span>
              <br /><hr />
              <span>
                Let's collaborate to bring your visions to life with stunning visuals that leave a lasting impression.
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width="100%" height="100%" />
            </Tilt>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
               <h2>FIND ME ON</h2>
            <span>
              <Link href="https://www.youtube.com/@annishkumar/shorts" target="_blank" rel="noopener">
                <img src={Youtube} alt="youtube" style={{ width: '50px', cursor: 'pointer', paddingRight:"7px" }} />
              </Link>
            </span>
            <span>
              <Link href="https://www.upwork.com/freelancers/~01b88ffe5dcde734ce" target="_blank" rel="noopener">
                <img src={Upwork} alt="Upwork" style={{ width: '50px', cursor: 'pointer', paddingRight:"7px" }} />
              </Link>
            </span>
            <span>
              <Link href="https://www.instagram.com/_annish_kumar_/" target="_blank" rel="noopener">
                <img src={Instagram} alt="Instagram" style={{ width: '50px', cursor: 'pointer', paddingRight:"7px" }} />
              </Link>
            </span>
            <span>
              <Link href="https://www.fiverr.com/annish_kumar?up_rollout=true" target="_blank" rel="noopener">
                <img src={Fiverr} alt="Fiverr" style={{ width: '50px', cursor: 'pointer', paddingRight:"7px" }} />
              </Link>
            </span>
            <span>
              <Link href="https://www.deviantart.com/ann2000wat/gallery" target="_blank" rel="noopener">
                <img src={Deviantart} alt="Deviantart" style={{ width: '50px', cursor: 'pointer', paddingRight:"7px" }} />
              </Link>
            </span>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
export default Home2;
