

import {FaBars} from 'react-icons/fa'
import { Nav, 
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  //LeftIcon
    } from './NavbarElements'

import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
  
  return (
    <>
      <Nav scrollNav={scroll}>
        <NavbarContainer>
       
      
          <MobileIcon onClick={toggle}>
          
            <FaBars/>
          </MobileIcon>
          <NavMenu>
          
            <NavItem>
              <NavLinks to="home"
              smooth = {true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset = {-80}
              
              >/home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about-me"
               smooth = {true} 
               duration={500} 
               spy={true} 
               exact='true' 
              >/about-me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience"
              smooth = {true} 
              duration={500} 
              spy={true} 
              exact='true' 
              >/experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="creation"
              smooth = {true} 
              duration={500} 
              spy={true} 
              exact='true' 
              >/software-creations</NavLinks>
            </NavItem>  
          </NavMenu>
          <NavBtn>
        
          <NavBtnLink to="/database">
              {/* &#47;&#47;database  */}
              
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar