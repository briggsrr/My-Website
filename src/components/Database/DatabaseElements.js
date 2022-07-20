import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 980px;
    position:grid;
    z-index: 0;
    background: #0b192f;

    border: 1px solid #fff;
    
`

export const HomeLink = styled(Link)`
    width: 100%;
    color: #64ffda;
    display: flex;
    cursor: pointer;


    &:hover {
        color: #8892af;
        transition: 0.2s ease-in-out;
    }
 
`;

export const NavbarContainer = styled.div`


    
`;

export const ClickerContainer = styled.div`
    
    



`;

export const DataButton = styled.button`
    
    



`;