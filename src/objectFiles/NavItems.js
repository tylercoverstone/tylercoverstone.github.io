import React from "react";
import { HomeRounded, CodeRounded, EmailRounded, ContactPageRounded} from "@mui/icons-material";

const NavItemList = [
    {
        name: 'About Me',
        //icon: <PersonRounded/>,
        icon: 'PersonRounded',
        to: "/",
        links: []
    },
    {
        name: 'My Work',
        //icon: <CodeRounded/>,
        icon: 'CodeRounded',
        //to: "/work",
        links: [
            {title: "Finxact", to: "/finxact"},
            {title: "FIS", to: "/fis"},
            {title: "Florida Blue", to: "/floridablue"}
        ]
    },
    {
        name: 'Contact Me',
        //icon: <ContactPageRounded/>,
        icon: 'EmailRounded',
        to: "/contact",
        links: []
    },
]

export default NavItemList