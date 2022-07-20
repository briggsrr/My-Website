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
    cursor: pointer;
    justify-content: center;
    padding-top: 30px;
    margin-bottom:350px;
    text-decoration: none;
    

    &:hover {
        color: #8892af;
        transition: 0.2s ease-in-out;
    }
    
 
`;

export const NavbarContainer = styled.div`
    height: 80px;
    //display: flex;
    //border: 1px solid #fff;
    
`;

// export const ClickerContainer = styled.div`
//     display: grid;
//     border: 1px solid #fff;
//     height: 400px;
//     justify-content: center;

    
//     grid-template-columns: "a" 
//                             "b";
    
    



// `;

// export const DataButton1 = styled.button`
//     //display: flex;
  
//   align-items: center;
//   height: 200px;
//   width: 200px;
//   border: 3px solid green;
//   grid-area: a;
  
//   &:hover {
//         transform: scale(1.03);
//         transition: all 0.2s ease-in-out;
//         cursor: pointer;
//     }
// &:active {
  
//   box-shadow: 0 5px #666;
//   transform: translateY(10px);
//   transition: all .2s ease-in-out;
// }

    
  
  

// `;

// export const DataButton2 = styled.button`
// //display: flex;
//   justify-content: center;

//   height: 200px;
//   border: 3px solid green;
  
//   width: 200px;

//   &:hover {
//         transform: scale(1.03);
//         transition: all 0.2s ease-in-out;
//         cursor: pointer;
//     }
//     &:active {
  
//   box-shadow: 0 5px #666;
//   transform: translateY(10px);
//   transition: all 0.2s ease-in-out;
//   grid-area:b
// }



// `;