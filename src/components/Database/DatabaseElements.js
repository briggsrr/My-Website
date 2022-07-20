import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #0b192f;
    
`

export const HomeLink = styled(Link)`
    width: 100%;
    color: #64ffda;
    display: flex;
    text-decoration: none;
    //border-bottom: 1px solid #64ffda;
    /* padding: 0 2rem; */
    align-items:center;
    height: 100px;
    //background-color: #10213e;
    justify-content: center;
    /* margin-left: 75px;
    margin-top: 75px; */
    cursor: pointer;


    &:hover {
        color: #8892af;
        transition: 0.2s ease-in-out;
    }
 
`;

export const NavbarContainer = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    z-index: 1;
    /* width: 100%; */
    
    /* margin: auto;
    width: 73%;
     border-bottom: 1px solid #64ffda; 

    max-width: 1100px; */
    
`;