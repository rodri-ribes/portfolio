import React, {useState} from "react";
import { Portada, NavbarContainer, NavbarWrapper, Menu, MenuItem, MenuItemLink, IconLogoMovile } from "./NavBar.elements";
import { FaBars, FaTimes, FaUserAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import {BsFillArrowDownCircleFill} from "react-icons/bs";



function NavBar() {
    const [click, setClick] = useState(false);

    const changeClick = () =>{
        setClick(!click);
    }
    return ( 
        <>  
            <Portada>
                    <h1>Hello, I'm <b>Rodrigo Ribes</b></h1>
                    <span>I'm a Full-Stack Web Developer</span>
                    <a href="#about"><BsFillArrowDownCircleFill/></a>
            </Portada>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogoMovile onClick={() => changeClick()}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </IconLogoMovile>
                    <Menu click={click}>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <div>
                                    <FaUserAlt/>
                                    <a href="#about">ABOUT</a>
                                </div>
                            </MenuItemLink>         
                        </MenuItem>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <div>
                                    <FaBriefcase/>
                                    <a href="#portfolio">PORTFOLIO</a>
                                </div>
                            </MenuItemLink>         
                        </MenuItem>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <div>
                                    <FaEnvelope/>
                                    <a href="#contact">CONTACT</a>                                
                                </div>
                            </MenuItemLink>         
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    );
}

export default NavBar;