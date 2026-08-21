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
                    <Typography variant="body1">I jumped into Finxact in October of 2023 as a developer on their Core API banking platform. My work started on the lending side, with a focus on mortgage products and services. I am now in a lead developer role in Core Strategic Development.</Typography>
                  </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
              <Typography variant="h4">What I'm Doing at Finxact,</Typography>
                <FadeInWrapper>
                  <Typography variant="body1">Generally, we work in Go to build new products and functionalities for Finxact's core banking API's. In my current role, I work in engineering and development of strategic initiatives which I help design, build, and interface alongside top development leadership at Finxact.</Typography>
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
                    primary="Core Strategic Development"
                    secondary="I can't go into product-specific details for what I'm currently working on, but my current role involves leading strategic development initiatives for Finxact's core banking platform. I work directly with development leadership in C-suite, VP, and Director roles to identify and target long term strategic intiatives in development, and then to design and build these products and frameworks. My role specifically involves design and architecture in this space, vetting POC's and exploring new and streamlined banking technology concepts in code, then executing development of these concepts into production-ready products and frameworks."  
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                    primary="Relationship Pricing Decisioning Engine"
                    secondary="Relationship pricing is a decision engine-based, customizable financial rewards platform built on the gRule framework. It allows for customers to recieve configured rewards based on custom rulesets against their accounts with their banking providers. Customizability between rewards and decisioning criteria is completely in the hands of the banking providers.I designed and built this product as a project owner and lead developer."  
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                    primary="Amortization Algorithms and Logic"
                    secondary="I have worked in building out complex algorithms and products in amortizing logic. These systems are deeply integrated into the core banking platform and are used to calculate amortization schedules for various lending products. Configurability and accuracy in this space is of paramount importance, and I have worked extensively in building out these systems to meet the needs of our clients."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                    primary="Accrual Processes and Interest Calculation Methods"
                    secondary="One of many things that can vary across different lending products is accrual processes and accompanying interest calculation methods. I have worked directly on building these processes out toward the specific needs of our clients and products, such as custom accrual processes for mortgage products and interest calculation methods for specific loan types."  
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
                    primary="Tax Form Extracts and Regulatory Compliance"
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
