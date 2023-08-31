import { createTheme } from "@mui/material";

const headerTheme = createTheme({
    typography: {
        
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: '#111212'
                }
            }       
        }
    },
    palette : {
        mode: 'dark'
    }
});

export default headerTheme;