import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, 
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
    } from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">/home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about-me">/about-me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience">/experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="software-creations">/software-creations</NavLinks>
            </NavItem>  
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/click-me">Click Me!</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar