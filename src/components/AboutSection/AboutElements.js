import styled from 'styled-components'


export const AboutContainer = styled.div`
    background: #0b192f;
    padding-top: 80px;
    

`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1000px;
    width: 100%;
    max-width: 1000px;
    margin-right:auto;
    margin-left: auto;
    padding: 0 24px;
    // justify-content: center;
    border-top: .5px solid #64ffda;

    @media screen and (max-width: 1000px) {
        height: 1800px;
        
    }

    @media screen and (max-width: 600px) {
        height: 1700px;
        
    }

   


`
export const AboutHeader = styled.h1`

margin-bottom: 24px;
font-size: 40px;
//font-weight: 600;
color: #cbd6f6;
padding-top: 50px;
font-weight: 20;

`

export const AboutRow = styled.div`
    display: grid;
    //grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    grid-template-areas: "a b";

    @media screen and (max-width: 1000px) {
        grid-template-areas: "a"
                            " b";
    }
    

`

export const Column1 = styled.div`
    display: flex;
    margin-top: 35px;
    margin-bottom: 15px;
    grid-area: a;
    font-size: 22px;
    font-weight: 20;

    border-radius: 10px;
    border: 1px solid #64ffda;
    background-color: #10213e;
    margin-bottom: 70px;
    justify-content: center; 
    max-width: 480px;
    
`

export const Column2 = styled.div`
   
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: b;

`

export const TextWrapper = styled.div`
    max-width: 480px;
    padding-top: 10px;
    padding-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
    


`

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 4px;
    font-size:18px;
    line-height:24px;
    color: #8892af;
    transition: 0.8s all ease;

    /* @media screen and (max-width: 750px) {
        font-size: 14px;
        transition: 0.8s all ease;
    }


    @media screen and (max-width: 400px) {
        font-size: 12px;
        transition: 0.8s all ease;
    } */
`

export const List = styled.p`
    padding-left: 50px;
    padding-top: 15px;
    font-size:15px;
    line-height:24px;
    color: #64ffda;
    padding-bottom: 15px;

    /* @media screen and (max-width: 750px) {
        font-size: 10px;
        transition: 0.8s all ease;
    }


    @media screen and (max-width: 400px) {
        font-size: 10px;
        transition: 0.8s all ease;
    } */

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    padding-top: 0px;
    
`

export const Img1 = styled.img`
    
    width: 73%;
    margin: 0px 0px 60px 55px;
    padding-right: 0;
    //filter: contrast(200%);
    //drop-shadow(16px 16px 16px #64ffda);
    //filter: grayscale(50%);
    //filter: hue-rotate(90deg);
    //filter: invert(75%);
    //filter: opacity(85%);
    //filter: saturate(30%);
    //filter: sepia(60%);
    border-radius: 10px;
    filter: brightness(90%);
    border: 1px solid #64ffda; 
    opacity: 85%;
    

    
`
export const Img2 = styled.img`
    width: 75%;
    margin: 0px 0px 60px 55px;
    border-radius: 10px;
    opacity: 95%;
    border: 1px solid #64ffda; 
    opacity: 85%;
       
`