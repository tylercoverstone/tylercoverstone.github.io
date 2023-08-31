import { createTheme, responsiveFontSizes } from "@mui/material";

var fisTheme = createTheme({
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
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    width:'100%',
                    color: 'white',
                },
            }
        }
    },
});

fisTheme = responsiveFontSizes(fisTheme);

export default fisTheme;