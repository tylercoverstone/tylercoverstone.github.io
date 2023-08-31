import { createTheme, responsiveFontSizes } from "@mui/material";

var FooterTheme = createTheme({
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
});

FooterTheme = responsiveFontSizes(FooterTheme);

export default FooterTheme;