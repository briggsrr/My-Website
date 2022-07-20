import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 980px;
    position:grid;
    z-index: 0;
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


    display: grid;
    z-index: 1;
    height: 300px;
    width: 100%;
    max-width: 1000px;
    margin-right:auto;
    margin-left: auto;
    padding: 0 24px;
    
`;

export const ClickerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    position: relative;
    border: 3px solid green;
    grid-area: b;
    



`;

export const DataButton = styled.button`
    
    



`;