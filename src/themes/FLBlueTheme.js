import { createTheme, responsiveFontSizes } from "@mui/material";

var flBlueTheme = createTheme({
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

flBlueTheme = responsiveFontSizes(flBlueTheme);

export default flBlueTheme;