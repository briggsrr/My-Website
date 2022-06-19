import styled from 'styled-components'
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #0b192f;
    height 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    
`;



export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 833px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #64ffda;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -28px;

    @media screen and (max-width: 833px) {
        display: none;
    }
 `;


export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #64ffda;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #8892af;
    }

    &:hover {
        color: #8892af;
        transition: 0.2s ease-in-out;
    }
 `;

 export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 833px) {
        display: none;
    }
 
 `;

 export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: #64ffda;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        color: #8892af;
    }
 
 `;