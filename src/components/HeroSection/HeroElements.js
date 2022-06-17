import styled from 'styled-components'


export const HeroContainer = styled.div`
    background: #0b192f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 862px;
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
    color: #64ffda;
    font-size: 55px;
    text-align: center;

    @media screen and (max-width: 833px;) {
        font-size: 40px;

    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }


`;

export const HeroP = styled.p`
    margin-top: 20px;
    color: #8892af;
    font-size: 25px;
    text-align: center;
    max-width: 600px;
    

    @media screen and (max-width: 833px;) {
        font-size: 24px;

    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;