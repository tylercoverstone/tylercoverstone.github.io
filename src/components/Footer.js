import { Grid, ThemeProvider, Typography } from "@mui/material";
import FooterTheme from "../themes/FooterTheme";

function Footer(){
    return(
        <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
            <ThemeProvider theme={FooterTheme}>
                <Grid container spacing={2} sx={{paddingTop: '2rem', paddingBottom: '1rem'}}>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography variant="body2"> &#169; 2024 Tyler Coverstone</Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );  
}
export default Footer