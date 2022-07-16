import styled from 'styled-components'

export const CreationContainer = styled.div`
    background: #0b192f;
    height: 948px;
    padding-top: 80px;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: 1100px
    }

    @media screen and (max-width: 835px) {
        height: 1630px
    }

    @media screen and (max-width: 400px) {
        height: 2100px;
    }



`;

export const CreationWrapper = styled.div`
    display: grid;
  
    z-index: 1;
    width: 100%;
    height: 400px;
    max-width: 1000px;
    margin-right:auto;
    margin-left: auto;
    padding: 0 24px;
    //justify-content: center;
    border-top: .5px solid #64ffda;


`;
export const CreationHeader = styled.h1`

        margin-bottom: 45px;
        font-size: 40px;
        //font-weight: 600;
        color: #cbd6f6;
        padding-top: 50px;

`;

export const ProjectWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center; 
    grid-gap: 25px;
    padding: 0 50px;
    

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr;


    }

    @media screen and (max-width:835px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        


    }

`;

export const ProjectCard = styled.div`
    display: flex;
    background: #10213e;
    border: solid #000;
    border-width: 1px 1px;
    border-color: #64ffda;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    height: 250px;
    padding: 30px;
    width: 100%;
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width:1000px) {
        height: 220px;


    }


    @media screen and (max-width:835px) {
        height: 190px;
        


    }
    @media screen and (max-width:400px) {
        height: 250px;
        


    }




`;

export const ProjImg = styled.img`
    position: absolute;
    height: 20px;
    width: 20px;
    right: 20px;
    top: 20px;
    margin-bottom: 0px;

`;

export const ProjectH2 = styled.div`
    font-size: 1rem;
    color: #64ffda;
    margin-bottom: 5px;
    margin-bottom: 15px;

`;

export const ProjectP = styled.div`
    color: #8892af;
    font-size: .9rem;
    margin-bottom: 15px;
    text-align: left;


`;

export const ProjectP2 = styled.div`
    font-size: .7rem;
    margin-bottom: 10px;
    color: #cbd6f6;

`;

export const MyLink = styled.a`
    text-decoration: none;


`