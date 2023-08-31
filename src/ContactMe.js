import { Grid, Container, Typography, Paper, ThemeProvider } from '@mui/material';
import FadeInWrapper from './components/FadeInWrapper';
import contactMeTheme from './themes/ContactMeTheme';
import './css/style.css'
import EmailerForm from './components/EmailerForm';


function ContactMe() {
  return (
    <div>
      <ThemeProvider theme={contactMeTheme}>
        <Container className='introContainer'>
          <Grid container spacing={4}>

            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="h4">Let's get in touch,</Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <Container className='gridTextContainer'>
                <Typography variant="body1">You can also feel free to reach out to me directly at <b>CoverstoneT@gmail.com</b></Typography>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <FadeInWrapper>
                {/*https://dashboard.emailjs.com/*/}
                <EmailerForm/>
              </FadeInWrapper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default ContactMe;
