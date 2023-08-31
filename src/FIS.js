import React, {useState, useRef, useEffect, createRef } from "react";
import { ThemeProvider, Grid, Container, Typography, MobileStepper, Button, AppBar, IconButton} from "@mui/material";
import { KeyboardArrowDownRounded } from '@mui/icons-material';
import FadeInWrapper from "./components/FadeInWrapper";
import FISWorkItemList from "./components/FISWorkItemList";
import fisProjects from "./objectFiles/FISProjects";
import fisTheme from './themes/FISTheme';
import './css/style.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

function FIS() {

  const [activeStep, setActiveStep] = React.useState(0);

  const projectRefs = useRef(fisProjects.map(() => createRef()));

  const handleNext = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    projectRefs.current[activeStep+1].current?.scrollIntoView({ behavior: "smooth" });
    //console.log(activeStep+1)
    //console.log(projectRefs.current[activeStep+1])
    
  };

  const handleBack = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    projectRefs.current[activeStep-1].current?.scrollIntoView({ behavior: "smooth" });
    //console.log(activeStep-1)
    //console.log(projectRefs.current[activeStep-1])
    
  };

  const [height, setHeight] = useState(0);
  const stepperHeightRef = useRef(null);

  useEffect(() => {
    //setHeight(stepperHeightRef.current.clientHeight);
  })

  const projectsStartRef = useRef(null);

  const scrollToProjectsStart = () => {
    projectsStartRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  /*
  <AppBar 
      ref={stepperHeightRef}
      position="fixed"
      sx={{
        //marginTop: fisTheme.mixins.toolbar.minHeight-50
        height:"8vh",
        marginTop: "92vh",
      }}
      > 
        <MobileStepper
          variant="dots"
          steps={fisProjects.length}
          position="static"
          activeStep={activeStep}
          //sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === fisProjects.length-1} sx={{width:'10vw'}}>
              {fisTheme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{width:'10vw'}}>
              {fisTheme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
          sx={{
            height:'100%'
          }}
        />
      </AppBar>
  */


  return (
    <>
      <ThemeProvider theme={fisTheme}>

      

        <Container className='introContainer'>
          <Grid container spacing={4}>

            <Grid item xs={12}/>

            <Grid item xs={12} sm={12} md={4}>
              <FadeInWrapper>
                <Container className='gridTextContainer'>
                  <img src={require('./images/fis_900x900.jpeg')} width='100%' style={{/*borderRadius:'50%'*/}}/> 
                </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <FadeInWrapper>
                  <Container className='gridTextContainer'>
                    <Typography variant="h2">FIS</Typography>
                    <Typography variant="h4">Systems Programmer III</Typography>
                    <Typography variant="h4">June 2019 - Current</Typography>
                    <Typography variant="body1">In June of 2019 I started at FIS as a Entry Level Software Engineer, and am now currently a Systems Programmer III. Despite what my title may suggest, my work at this company has been primarily full stack development-centric, and some of my completed and current projects and include Aureus, Minerva, Event Dispatch, Certificate Monitoring, and the Device Addition and Deletion Interface. You can read more about each of these projects below.</Typography>
                  </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}/>

            <Grid item xs={12}>
              <FadeInWrapper>
                <Container className='gridTextContainer'>
                  <Typography variant='body1'>Please note, due to proprietary integrity as well as that all of my development is for FIS internal operations, I will not be displaying any workflows, diagrams, or in-depth descriptions of architecture and design. Thanks for your understanding.</Typography>
                </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                <IconButton aria-label='Arrow' onClick={scrollToProjectsStart}>
                  <KeyboardArrowDownRounded/>
                </IconButton>
              </Container>
            </Grid>

            <div ref={projectsStartRef}/>
            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant='h2' >Some Projects I've worked on at FIS</Typography>
              </Container>
            </Grid>

            <FISWorkItemList projectRefs={projectRefs}/>


          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default FIS;
