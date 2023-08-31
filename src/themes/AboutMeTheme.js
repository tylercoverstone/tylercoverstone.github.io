import { createTheme, responsiveFontSizes } from "@mui/material";

var aboutMeTheme = createTheme({
    typography: {
        fontFamily : [
            'Source Code Pro',
            'cursive'
        ].join(','),
        allVariants: {
            color: 'white',
        }
    },
    palette : {
        mode: 'dark'
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: '#111212',
                }
            }       
        }
    },
});

aboutMeTheme = responsiveFontSizes(aboutMeTheme);

export default aboutMeTheme;