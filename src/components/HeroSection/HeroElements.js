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
    font-size: 31px;
    text-align: left;
    display:flex;
    justify-content: left;
    align-items:left;
    transition: 0.8s all ease;

    @media screen and (max-width: 675px) {
        max-width: 1000px;
        font-size: 26px;
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 575px) {
        max-width: 450px;
        font-size: 21px;
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 400px) {
        max-width: 350px;
        font-size: 17px;
        transition: 0.8s all ease;
    }


`;

export const HeroP = styled.p`
    margin-top: 5px;
    color: #8892af;
    font-size: 22px;
    font-weight: 20;
    text-align: left;
    max-width: 600px;
    transition: 0.8s all ease;

    @media screen and (max-width: 675px) {
        max-width: 500px;
        font-size: 20px;
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 575px) {
        max-width: 400px;
        font-size: 15px;
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 400px) {
        max-width: 300px;
        font-size: 12px;
        transition: 0.8s all ease;
    }

    
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
    transition: all 0.8s ease-in-out;
    text-decoration: none;
    padding-right: 515px;
    

    &:hover {
        transition: all 0.2 ease-in-out;
        color: #8892af;
    
    }

    @media screen and (max-width: 675px) {
        max-width: 900px;
        font-size: 13px;
        padding-right: 430px;
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 575px) {
        max-width: 450px;
        font-size: 12px;
        padding-right: 340px;
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 400px) {
        max-width: 350px;
        font-size: 10px;
        padding-right: 145px;
        transition: 0.8s all ease;
    }
`;


