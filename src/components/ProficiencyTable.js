import React from "react";
import { Grid, Paper, Container, Typography, } from '@mui/material';
import '../css/style.css'
import ProgressBar from "./ProgressBar";

const ProficiencyTable = ({proficiencyList, color, isMobile}) => {

  return (
    <Container className='gridTextContainer'>       
        <Paper elevation={12} sx={{paddingBottom:'1rem'}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Container className='gridTextContainer'/>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'left'}}>
                <Container className='gridTextContainer'>
                    <Typography variant='body2' sx={{fontSize: isMobile()? '0.5rem' : '0.875rem'}}><b>Basic</b></Typography>
                    </Container>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'center'}}>
                <Container className='gridTextContainer'>
                    <Typography variant='body2' sx={{fontSize: isMobile()? '0.5rem' : '0.875rem'}}><b>Proficient</b></Typography>
                    </Container>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'right'}}>
                    <Container className='gridTextContainer'>
                    <Typography variant='body2' sx={{fontSize: isMobile()? '0.5rem' : '0.875rem'}}><b>Mastered</b></Typography>
                    </Container>
                </Grid>
                {proficiencyList.map((item, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12}>
                            <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                                <hr style={{borderColor: 'black', marginTop:'0', marginBottom:'0'}}/>
                            </Container>
                        </Grid>
                        <Grid item xs={3} sx={{}}>
                            <Container className='gridTextContainer' sx={{textAlign:'center'}}>
                            <Typography variant='body1' sx={{fontSize: isMobile()? '0.5rem' : '0.875rem'}}>{item.name}</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={9} sx={{textAlign: 'center', alignItems: 'center', display:'flex'}}>
                            <Container className='gridTextContainer'>
                            <ProgressBar value={item.percentage} color={color}></ProgressBar>
                            </Container>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid> 
        </Paper>
    </Container>
  );
  
};

export default ProficiencyTable