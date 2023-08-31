import { useState } from "react";
import { AppBar, Toolbar, Box, Tooltip } from "@mui/material";
import {ThemeProvider, IconButton} from "@mui/material";
import { ArticleRounded, Menu } from "@mui/icons-material";
import SideNav from "./SideNav.tsx";
import sideNavTheme from "../themes/SideNavTheme";
import headerTheme from "../themes/HeaderTheme.js";

function Header(){
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return(
        <div>
            <ThemeProvider theme={headerTheme}>
                <AppBar position="fixed">          
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <IconButton color="inherit" onClick={toggleDrawer}>
                                <Menu/>
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="My Resumé">
                                <a href={require('../images/Resume.pdf')} target={'_blank'}>
                                    <ArticleRounded/>
                                </a>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Toolbar/>
            </ThemeProvider>

            <ThemeProvider theme={sideNavTheme}>
                <SideNav open={drawerOpen} toggleDrawer={toggleDrawer}/>
            </ThemeProvider>
        </div>
    );  
}
export default Header