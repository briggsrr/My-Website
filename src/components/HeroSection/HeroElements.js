import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components'


export const HeroContainer = styled.div`
    background: #0b192f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 950px;
    position: relative;
    z-index: 1;


`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`;



export const HeroContent = styled.div`
    z-index: 3;
    align-items: center;
    max-width: 1200px;
    position: absolute; 
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    
`;

export const HeroH1 = styled.h1`
    color: #cbd6f6;
    font-size: 50px;
    text-align: left;
    display:flex;
    justify-content: left;
    align-items:left;


`;

export const HeroP = styled.p`
    margin-top: 5px;
    color: #8892af;
    font-size: 22px;
    font-weight: 20;
    text-align: left;
    max-width: 600px;

    
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Button = styled(Link)`
    color: #64ffda;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding-right: 515px;
    

    &:hover {
        transition: all 0.2 ease-in-out;
        color: #8892af;
    
    }
`;


