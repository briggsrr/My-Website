import React from 'react'
import { SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick = {toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}>
                    /home
                </SidebarLink>
                <SidebarLink to="about-me" onClick={toggle}>
                    /about-me
                </SidebarLink>
                <SidebarLink to="experience" onClick={toggle}>
                    /experience 
                </SidebarLink>
                <SidebarLink to="creation" onClick={toggle}>
                    /software-creations
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/click-me' onClick={toggle}>
                    Click Me!
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>



    </SidebarContainer>

  )
}

export default Sidebar