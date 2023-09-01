import React from "react";
import { Grid, Paper, Container, Typography, } from '@mui/material';
import '../css/style.css'
import fisProjects from "../objectFiles/FISProjects";
import FadeInWrapper from "./FadeInWrapper";

const FISWorkItemList = ({projectRefs}) => {

  return (
    <>
    {fisProjects.map((item, index) => (
        
        <React.Fragment key={index}>
            <Grid item xs={12}  ref={projectRefs.current[index]}>
                <Container className='gridTextContainer'>
                    <Typography variant="h4"><b>{item.title}</b> </Typography>
                    <Typography variant="h6">{item.subtitle}</Typography>
                    <Typography variant="body1">Status: {item.status}</Typography>
                </Container>
            </Grid>  

            <Grid item xs={12}>
            <Container className='gridTextContainer'> 
                <Paper elevation={12} sx={{paddingBottom:'1rem'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Container className='gridTextContainer'>
                                <Typography variant="h6"><b>What does it do?</b></Typography>
                                <FadeInWrapper>
                                    <Typography variant="body1">{item.description}</Typography>
                                </FadeInWrapper>
                            </Container>
                        </Grid>    

                        <Grid item xs={12}>
                            <Container className='gridTextContainer'>
                                <Typography variant="h6"><b>How does it work?</b></Typography>
                                <FadeInWrapper>
                                    <Typography variant="body1">{item.technologicalDescription}</Typography>
                                </FadeInWrapper>
                            </Container>
                        </Grid>  

                        <Grid item xs={12}>
                            <Container className='gridTextContainer'>
                                <Typography variant="h6"><b>How was it made?</b></Typography>
                                <FadeInWrapper>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="body1" sx={{paddingLeft: '1rem'}}><b>Technologies and Frameworks</b></Typography>
                                            {item.technologiesUsed.map((frameworkItem, frameworkIndex) => (
                                                <React.Fragment key={frameworkIndex}>
                                                    <Typography variant="body1" sx={{paddingLeft: '2rem'}}>- {frameworkItem}</Typography>
                                                </React.Fragment>
                                            ))}
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="body1" sx={{paddingLeft: '1rem'}}><b>Languages</b></Typography>
                                            {item.languagesUsed.map((languageItem, languageIndex) => (
                                                <React.Fragment key={languageIndex}>
                                                    <Typography variant="body1" sx={{paddingLeft: '2rem'}}>- {languageItem}</Typography>
                                                </React.Fragment>
                                            ))}
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="body1" sx={{paddingLeft: '1rem'}}><b>Third Party Integrations</b></Typography>
                                            {item.appsInterfacedWith.map((appItem, appIndex) => (
                                                <React.Fragment key={appIndex}>
                                                    <Typography variant="body1" sx={{paddingLeft: '2rem'}}>- {appItem}</Typography>
                                                </React.Fragment>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </FadeInWrapper>
                            </Container>
                        </Grid>
                    </Grid>
                </Paper>  
            </Container>  
            </Grid>  

            <Grid item xs={12}>
                    <hr/>
            </Grid>
            
        </React.Fragment>
        
        ))}
    </>
  );
  
};

export default FISWorkItemList