import { ThemeProvider, Grid, Container, Typography} from "@mui/material";
import FadeInWrapper from "./components/FadeInWrapper";
import flBlueTheme from "./themes/FLBlueTheme";
import './css/style.css'

function FloridaBlue() {
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
                  <img src={require('./images/flblue_400x400.jpeg')} width='100%' style={{/*borderRadius:'50%'*/}}/> 
                </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <FadeInWrapper>
                  <Container className='gridTextContainer'>
                    <Typography variant="h2">Florida Blue</Typography>
                    <Typography variant="h4">Web and Mobile Development Intern</Typography>
                    <Typography variant="h4">May 2018 - May 2019</Typography>
                    <Typography variant="body1">I was hired into an internship for the summer of 2018 at Florida Blue in the Web and Mobile Development area, and then was re-hired at the end of my program for another six months. My team primarily built sales-side software on the Agents' Plan Portal, to aid both agents and customers in the process of selling personalized healthcare plans from start to finish.</Typography>
                  </Container>
              </FadeInWrapper>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
              <Typography variant="h4">What I Did,</Typography>
                <FadeInWrapper>
                  <Typography variant="body1">On my day-to-day, I performed low-level development tasks for frontend development and vanilla javascript logic. I also performed QA testing through regression and acceptance testing, as well as wrote and maintained technical documentation. For my internship capstone project, my team and I built an Amazon Alexa Application that was designed to supply the user with Health Plan information upon request. This application was written in Java, and utilized Amazon Alexa API's, as well as internal Florida Blue Health Plan library API's.</Typography>
                </FadeInWrapper>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">What I Learned,</Typography>
                <FadeInWrapper>
                <Typography variant="body1">As my first foray into productionized software development in a corporate environment, I feel as this was a great introduction into core skills and concepts that I would practice for the remainder of my career. Specifically, I learned and practiced:
                <ul>
                  <li><b>Agile Development:</b> We utilized SCRUM practices, and I learned how to work with my team to develop and rate tasks that would be assigned to stories, then organize these into sprints which I would perform and track via standups and sprint planning.</li>
                  <li><b>CI/CD Pipelining:</b> I began to understand version control in a productionized setting, and practiced continuous integration and development via incremental development in sprints.</li>
                  <li><b>Development in a Corporate Environment:</b> Other than Agile Development and CI/CD practices, I also learned valuable strategies for programming in a productionized corporate setting such as writing code that adheres to team standards, documentation and commenting, version control, and the importance of building re-usable and well-maintained code.</li>
                  <li><b>Technical Documentation:</b> I learned how to lay out, plan, and accurately write documentation for both user and developer perspectives to accompany software.</li>
                </ul>
                </Typography>
                </FadeInWrapper>
              </Container>
            </Grid>

          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default FloridaBlue;
