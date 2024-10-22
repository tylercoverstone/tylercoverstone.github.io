import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider, Grid, Container, Typography, IconButton, } from '@mui/material';
import { Instagram, Facebook, GitHub, LinkedIn, KeyboardArrowDownRounded } from '@mui/icons-material';
import ProficiencyTable from "./components/ProficiencyTable";
import AnnotatedImagePopover from "./components/AnnotatedImagePopover";
import FadeInWrapper from "./components/FadeInWrapper";
import languageList from "./objectFiles/Languages";
import frameworkList from "./objectFiles/Frameworks";
import databaseList from "./objectFiles/Databases";
import conceptList from "./objectFiles/Concepts";
import toolList from "./objectFiles/Tools";
import aboutMeTheme from './themes/AboutMeTheme';
import './css/style.css'

function AboutMe() {

  useEffect(() => {
    document.title = 'Tyler Coverstone';
  }, []);
  
  const [surfAnchorEl, setSurfAnchorEl] = useState(null);
  const [musicAnchorEl, setMusicAnchorEl] = useState(null);
  const [buildAnchorEl, setBuildAnchorEl] = useState(null);

  function handleSurfClick(event) {
    if (surfAnchorEl !== event.currentTarget) {
      setSurfAnchorEl(event.currentTarget);
    }
  }
  function handleSurfClose() {
    setSurfAnchorEl(null);
  }

  function handleMusicClick(event) {
    if (musicAnchorEl !== event.currentTarget) {
      setMusicAnchorEl(event.currentTarget);
    }
  }
  function handleMusicClose() {
    setMusicAnchorEl(null);
  }

  function handleBuildClick(event) {
    if (buildAnchorEl !== event.currentTarget) {
      setBuildAnchorEl(event.currentTarget);
    }
  }
  function handleBuildClose() {
    setBuildAnchorEl(null);
  }

  const annotatedImagePopoverDetails = [
    {
      id: 'music-menu',
      anchorEl: musicAnchorEl,
      open: Boolean(musicAnchorEl),
      onClose: handleMusicClose,
      aspectRatio:'3648/5472',
      image:require('./images/music.JPG'),
      textContent:"I've been playing guitar from a young age, and I write and perform with a few different musical projects.",
    },
    {
      id: 'surf-menu',
      anchorEl: surfAnchorEl,
      open: Boolean(surfAnchorEl),
      onClose: handleSurfClose,
      aspectRatio:'3648/5472',
      image:require('./images/surf.JPG'),
      textContent:"I surfed competitively in high school and college, and I love to surf for fun nowadays.",
    },
    {
      id: 'build-menu',
      anchorEl: buildAnchorEl,
      open: Boolean(buildAnchorEl),
      onClose: handleBuildClose,
      aspectRatio:'3/4',
      image:require('./images/guitarPedals.jpg'),
      textContent:"Lately I've been interested in learning how to design and build audio processing circuitry, such as instrument effect pedals and amplifiers.",
    },
]

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  function isMobile() {
    return (width <= 900)
  }

  const skillsStartRef = useRef(null)

  const scrollToSkills = () => {
    skillsStartRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <ThemeProvider theme={aboutMeTheme}>
        <Container className='introContainer'>
        
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={8}>
              <Container className='gridTextContainer' sx={{padding:'2rem'}}>
                
                <Typography variant='h6'>Hi, my name is</Typography>
                <Typography variant='h1' sx={{ typography: { sm: 'h1', xs: 'h3' } }}>Tyler Coverstone</Typography>
                <Typography variant='h6'>I'm currently a Core Application Software Developer at Finxact.</Typography>
                <hr></hr>
              </Container>
            </Grid>
            
            <Grid item xs={12} sm={12} md={4}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <Container className='gridTextContainer'>
                    <div style={{/*minHeight:'calc(1*30vw)'*/}}>
                      {/*<img src={require('./images/ProfilePlaceholder.JPG')} width='100%' style={{borderRadius:'50%'}}/>*/}
                      <img src={require('./images/headshot.jpg')} width='100%' style={{borderRadius:'50%'}}/>
                    </div>
                  </Container>
                </Grid>
                <Grid item xs={3}>
                  <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                    <IconButton aria-label='LinkedIn' onClick={() => window.open("https://www.linkedin.com/in/tyler-coverstone-b30854285/", "_blank")}>
                      <LinkedIn/>
                    </IconButton>
                  </Container>
                </Grid>
                <Grid item xs={3}>
                  <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                    <IconButton aria-label='Instagram' onClick={() => window.open("https://www.instagram.com/coverstone321/", "_blank")}>
                      <Instagram/>
                    </IconButton>
                  </Container>
                </Grid>
                <Grid item xs={3}>
                  <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                    <IconButton aria-label='GitHub' onClick={() => window.open("https://github.com/tylercoverstone", "_blank")}>
                      <GitHub/>
                    </IconButton>
                  </Container>
                </Grid>
                <Grid item xs={3}>
                  <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                    <IconButton aria-label='Facebook' onClick={() => window.open("https://www.facebook.com/tyler.coverstone.9", "_blank")}>
                      <Facebook/>
                    </IconButton>
                  </Container>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant='body1'>I am an engineer that is passionate about making solutions that are not only useful, but also intuitive and user experience focused. I love to build, create, and learn. When I'm not programming, I like to 
                  <b
                    style={{color:'#7eadf7'}} 
                    aria-owns={Boolean(musicAnchorEl) ? "music-menu" : undefined} 
                    aria-haspopup="true" 
                    onClick={handleMusicClick} 
                    onMouseEnter={handleMusicClick}
                    onMouseLeave={handleMusicClose}
                  > play music
                  </b>, 
                  <b 
                    style={{color:'#7eadf7'}} 
                    aria-owns={Boolean(surfAnchorEl) ? "surf-menu" : undefined} 
                    aria-haspopup="true" 
                    onClick={handleSurfClick} 
                    onMouseEnter={handleSurfClick}
                    onMouseLeave={handleSurfClose}
                  > surf
                  </b>, or learn how to 
                  <b 
                    style={{color:'#7eadf7'}} 
                    aria-owns={Boolean(buildAnchorEl) ? "build-menu" : undefined} 
                    aria-haspopup="true" 
                    onClick={handleBuildClick} 
                    onMouseEnter={handleBuildClick}
                    onMouseLeave={handleBuildClose}
                  > build something new
                  </b>.
                </Typography>
                </Container>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant='body1' >Read on below to learn about my technological skillsets and educational background, or explore this site to learn about my work.</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                <IconButton aria-label='Arrow' onClick={scrollToSkills}>
                  <KeyboardArrowDownRounded/>
                </IconButton>
              </Container>
            </Grid>

            <div ref={skillsStartRef}/>
            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">Some Languages I've Worked With</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                <ProficiencyTable proficiencyList={languageList} isMobile={isMobile} color='#7EADF7'/>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">Some Frameworks I'm Familiar With</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                <ProficiencyTable proficiencyList={frameworkList} isMobile={isMobile} color='#fa5a5a'/>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">Some Database and Storage I Know About</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                <ProficiencyTable proficiencyList={databaseList} isMobile={isMobile} color='#4aff83'/>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">Some Concepts I've Learned and Exercise</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                <ProficiencyTable proficiencyList={conceptList} isMobile={isMobile} color='#b44aff'/>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">Some Tools I Use</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                <ProficiencyTable proficiencyList={toolList} isMobile={isMobile} color='#fade64'/>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <hr/>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">My Educational Background</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                <Container className='gridTextContainer'>
                  <Typography variant="body1">I graduated from the <b>University of North Florida</b> in <b>December of 2018</b> with a bachelor's degree in <b>Computing and Information Science: Computer Science</b>.</Typography>
                </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                <Container className='gridTextContainer'>
                  <Typography variant="body1">I received my degree <b>Summa Cum Laude</b> with a GPA of <b>3.95</b>.</Typography>
                </Container>
              </FadeInWrapper>
            </Grid>
            

          </Grid>
        
        </Container>     

        {annotatedImagePopoverDetails.map((item, index) => (
          <React.Fragment key={index}>
            <AnnotatedImagePopover annotatedImagePopoverDetails={item} isMobile={isMobile}/>
          </React.Fragment>
        ))}

      </ThemeProvider>
    </>
  );
}

export default AboutMe;
