import React, {useState} from "react";
import { Drawer, List, ListItem, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import NavItemList from "../objectFiles/NavItems";
import { HomeRounded, PersonRounded, EmailRounded, CodeRounded, ContactPageRounded} from "@mui/icons-material";
import '../css/style.css'

type sideNavProps = {
    open: boolean;
    toggleDrawer: (open: boolean) => {void};
}

const IconComponents = {
    HomeRounded: HomeRounded,
    PersonRounded: PersonRounded,
    EmailRounded: EmailRounded,
    CodeRounded: CodeRounded,
    ContactPageRounded: ContactPageRounded
}

function SideNav({open,toggleDrawer}: sideNavProps){
    const [openSection, setOpenSection] = useState('');

    const handleClick = ({title}: {title:string;}) => {
        setOpenSection(openSection === title ? '' : title)
    }

    return(
        <Drawer variant="temporary" open={open} onClose={() => toggleDrawer(false)}>
            <List>
                {NavItemList.map((navItem:any, index:number) => (
                    <React.Fragment key={index}>
                        {navItem.to ? (
                            <ListItem component={Link} to={navItem.to} className="ListItem" onClick={()=>{toggleDrawer(false);setOpenSection('')}}>
                                {React.createElement(IconComponents[navItem.icon], {className: 'SideNavText'})}
                                <ListItemText primary={navItem.name} className="SideNavText"/>
                            </ListItem>
                        ) : (
                            <>
                                <ListItem onClick={() => handleClick({title:navItem.name})} className="ListItem">
                                    {React.createElement(IconComponents[navItem.icon], {className: 'SideNavText'})}
                                    <ListItemText primary={navItem.name} className="SideNavText"/>
                                    {navItem.links && navItem.links.length > 0 ? (
                                        <>
                                            {openSection === navItem.name ? <ExpandLess className='SideNavText'/> : <ExpandMore className='SideNavText'/>}
                                        </>
                                    ): null}
                                </ListItem>
                                <Collapse in={openSection === navItem.name} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {navItem.links && navItem.links.length > 0 && navItem.links.map((link:any, index:number) => (
                                            <ListItem key={index} component={Link} to={link.to} className="ListItem" onClick={()=>{toggleDrawer(false);setOpenSection('')}}>
                                                <ListItemText primary={link.title} className="SideNavText"></ListItemText>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </>
                        )}
                    </React.Fragment>
                ))}
                
            </List>
        </Drawer>
    );
}

export default SideNav