import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/home">
                <img src="./guitar.svg" alt="logo" height={100} />
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/acous">
                    Acoustic Guitars
                </NavLink>
                <NavLink to="/bass">
                    Bass Guitars
                </NavLink>
                <NavLink to="/elec">
                    Electric Guitars
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;