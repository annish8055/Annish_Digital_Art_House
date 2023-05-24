import React from 'react';
import {
  Container, Grid, Typography,
} from '@mui/material';
import homeLogo from "../../assets/proFilePic.png";
import Particle from "./Particle";
import Type from "./type";

export const HomeSection: React.FC = () => {
  return (
    <section>
      <Container style={{ paddingTop: '100px', color:'white' }}>
        <Particle />
        <Container>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <div style={{ paddingBottom: 15 }}>
                <Typography variant="h4" align="center"> Hi There!{" "}
                 <span role="img" aria-labelledby="wave">
                   👋🏻
                 </span>
                </Typography>
                <br />
                <br />
                <Typography  variant="h4" align="center">
                  I AM,  <br /><b>Annish Kumar</b>
                </Typography>
              </div>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typography variant="h4" align="center"> <Type /> </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* <Card> */}
                <img
              src={homeLogo}
              alt="home pic"
              style={{ width: '100%', height:'75vh' }}
            />
              {/* </Card> */}
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
};
