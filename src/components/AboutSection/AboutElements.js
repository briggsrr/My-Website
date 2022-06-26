import styled from 'styled-components'


export const AboutContainer = styled.div`
    background: #0b192f;
    padding-top: 80px;
    

`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 900px;
    width: 100%;
    max-width: 1000px;
    margin-right:auto;
    margin-left: auto;
    padding: 0 24px;
    // justify-content: center;
    border-top: .5px solid #64ffda;

    @media screen and (max-width: 400px) {
        height: 950px;
    }


`
export const AboutHeader = styled.h1`

margin-bottom: 24px;
font-size: 40px;
//font-weight: 600;
color: #cbd6f6;
padding-top: 50px;

`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: "a b";
    

`

export const Column1 = styled.div`
    padding-top: 15px;
    margin-bottom: 15px;
    grid-area: a;
    font-size: 22px;
    font-weight: 20;

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: b;

`

export const TextWrapper = styled.div`
    max-width: 580px;
    padding-top: 0;
    padding-bottom: 60px;

`

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 25px;
    font-size:18px;
    line-height:24px;
    color: #8892af;
    transition: 0.8s all ease;


    @media screen and (max-width: 400px) {
        font-size: 14px;
        transition: 0.8s all ease;
    }
`

export const List = styled.p`
    padding-left: 50px;
    padding-top: 15px;
    font-size:15px;
    line-height:24px;
    color: #64ffda;
    padding-bottom: 15px;

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

`

export const Img1 = styled.img`
    width: 73%;
    margin: 0px 0px 60px 55px;
    padding-right: 0;
    border-radius: 30px;

    
`
export const Img2 = styled.img`
    width: 75%;
    margin: 0px 0px 60px 55px;
    padding-right: 0;
    border-radius: 30px;
       
`