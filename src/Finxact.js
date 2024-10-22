import { useEffect } from "react";
import { ThemeProvider, Grid, Container, Typography, List, ListItem, ListItemText} from "@mui/material";
import FadeInWrapper from "./components/FadeInWrapper";
import flBlueTheme from "./themes/FLBlueTheme";
import './css/style.css'

function Finxact() {

  useEffect(() => {
    document.title = 'Tyler Coverstone';
  }, []);

  return (
    <>
      <ThemeProvider theme={flBlueTheme}>
        <Container className='introContainer'>
          <Grid container spacing={4}>

            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <FadeInWrapper>
                <Container className='gridTextContainer'>
                  <img src={require('./images/Finxact.png')} width='100%' style={{/*borderRadius:'50%'*/}}/> 
                </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <FadeInWrapper>
                  <Container className='gridTextContainer'>
                    <Typography variant="h2">Finxact</Typography>
                    <Typography variant="h4">Core Application Software Developer</Typography>
                    <Typography variant="h4">October 2023 - Current</Typography>
                    <Typography variant="body1">I jumped into Finxact in October of 2023 as a developer on their Core API banking platform. My work is on the lending side, with a focus on mortgage products and services.</Typography>
                  </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
              <Typography variant="h4">What I'm Doing at Finxact,</Typography>
                <FadeInWrapper>
                  <Typography variant="body1">I work in Go to build new products and functionalities for Finxact's core banking API's. We work directly with banking clients to provide customized solutions as a backbone to their services.</Typography>
                </FadeInWrapper>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">Some Things I've Worked On,</Typography>
                <FadeInWrapper>
                <List>
                  <ListItem>
                    <ListItemText
                    primary="Amortization and Receivable Scheduling Capabilities"
                    secondary="I have worked in building out methods and calculations in amortizing mortgage loan products specific to the needs of multiple clients."  
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                    primary="Accrual Processes and Interest Calculation Methods"
                    secondary="One of many things that can vary across different lending products is accrual processes and accompanying interest calculation methods. I have worked directly on building these processes out toward the specific needs of our clients and products."  
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                    primary="Payments Processing"
                    secondary="I have worked directly in functionality that processes payments and built out solutions for processing specific payment codes across multiple banking scenarios."  
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                    primary="Tax Form Extracts"
                    secondary="I have built out multiple instances of tax form extract services, which calculate and generate tax forms for all platform users in accordance to IRS specifications for consumption."  
                    />
                  </ListItem>
                </List>
                
                </FadeInWrapper>
              </Container>
            </Grid>

          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Finxact;
