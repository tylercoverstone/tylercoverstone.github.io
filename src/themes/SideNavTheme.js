import { createTheme, responsiveFontSizes } from "@mui/material";

var sideNavTheme = createTheme({
    typography: {
        fontFamily : [
            'Source Code Pro',
            'cursive'
        ].join(',')
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#111212'
                }
            }       
        }
    },
    palette : {
        mode: 'dark'
    }
});

sideNavTheme = responsiveFontSizes(sideNavTheme);

export default sideNavTheme;