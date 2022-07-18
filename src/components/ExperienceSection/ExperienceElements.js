import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    color: #fff;
    background: #0b192f;
    padding-top: 80px;
    height: 1000px;

    @media screen and (max-width:650px) {
        height: 1100px;

    }

    @media screen and (max-width:550px) {
        height: 1200px;
    }

    @media screen and (max-width:400px) {
        height: 1300px;

    }
    

`;

export const ExperienceWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
    margin-right:auto;
    margin-left: auto;
    padding: 0 24px;
    // justify-content: center;
    border-top: .5px solid #64ffda;


`;
export const ExperienceHeader = styled.h1`

margin-bottom: 34px;
font-size: 40px;
//font-weight: 600;
color: #cbd6f6;
padding-top: 50px;
font-weight: 20;


`;

export const WorkInstance = styled.div`


`;

export const JobTitle = styled.h2`
    font-size: 30px;
    color:  #64ffda;
    font-weight: 20;



`;

export const RoleTitle = styled.h4`
    color: #cbd6f6;
    font-size: 20px;
    font-weight: 20;




`;

export const RoleTime= styled.p`
    padding-bottom: 25px;
    color: #cbd6f6;

    display: inline;
    font-weight: 20;
    //border-bottom: 2px solid black; 
    
    



`;

export const RoleTasks= styled.p`
    color: #8892af;
   



`;

export const RowTop = styled.div`
    
    //justify-content: center;
    width: 100%;
    padding-top: 15px;
    margin-bottom: 15px;
    grid-area: a;
    padding-left: 15px;
    

`;

export const RowBottom = styled.div`
    margin-bottom: 15px;
    grid-area: b;
    padding-left: 15px;

    
    

`;

export const ExperienceRow = styled.div`
    display: grid;
    //grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 
            "a a a"
            "b b b"
            "b b b"
            "b b b";
           
    height: 300px;
    border: 1px solid #64ffda;
    border-radius: 10px;
    background: #10213e;
    margin-bottom: 20px;
    

`;

export const ExperienceRow2 = styled.div`
    display: grid;
    //grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 
            "a a a"
            "b b b"
            "b b b"
            "b b b";
           
    height: 230px;
    border: 1px solid #64ffda;
    border-radius: 10px;
    background: #10213e;
    margin-bottom: 20px;
    


    @media screen and (max-width:650px) {
        height: 270px;

    }

    @media screen and (max-width:550px) {
        height: 320px;

    }

    @media screen and (max-width:400px) {
        height: 370px;

    }
    /* &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        
    } */
    

`;

export const Colored = styled.div`
    color: #cbd6f6;
    display: inline;



`;


export const Point= styled.div`
    margin-bottom: -10px;
     
    


`;