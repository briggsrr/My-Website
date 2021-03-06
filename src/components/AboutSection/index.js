import React from 'react'

import {
    AboutContainer,
    AboutWrapper, 
    AboutHeader, 
    AboutRow, 
    Column1, 
    Column2,
    TextWrapper, 
    Description,
    List,
    Img1,
    Img2,
    ImgWrap
} from './AboutElements.js'

const AboutSection = () => {
  return (
    <>
    <AboutContainer id="about-me">
        <AboutWrapper>
        <AboutHeader>
        /about-me
            <AboutRow>
                <Column1>
                    <TextWrapper>
                        <Description>
                        Hi, my full name is Robert Briggs III, 
                        but you can call me Bobby. 
                        I am from San Diego, CA, and currently in my third 
                        year pursuing my BS in computer science at
                         UC Santa Barbara. Outside of work, some of my hobbies include
                            pickle ball, body surfing, spike ball, poker, and lacrosse. 
                            If you're looking for me on a day off, I most likely can be found at the beach or gym. So far, 
                         some technologies 
                         I have been working with in all 
                         environments are:
                         </Description>
                         <br></br>
                         <Description>Languages:</Description>
                         <List>
                           C++ (fluent) <br></br>
                           Python (proficient) <br></br>
                           Javascript (proficient) <br></br>
                           HTML and CSS (familiar) <br></br>
                           Solidity (familiar) <br></br>
                           MIPS (familiar) <br></br>

                           <br></br>
                        </List>
                        
                           <Description>Noteable libraries, frameworks, APIs:</Description>
                        <List>
                           React.js <br></br>
                           Node.js <br></br>

                           gRPC (...Protobufs) <br></br> 
                           Juce <br></br> 
                           Googletest <br></br> 
                           Brownie <br></br> 
                    
                         </List>

                        <Description>Operating systems:</Description> 
                          
                           <List>
                            Ubuntu <br></br>
                            Unix <br></br>
                            Windows 10
                           </List>

                        
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img1 src={require('../../images/me.png')}/>
                    </ImgWrap>
                    <ImgWrap>
                        <Img2 src={require('../../images/me1.png')}/>
                    </ImgWrap>
                
                </Column2>
            </AboutRow>
        </AboutHeader>
        </AboutWrapper>
    </AboutContainer>
    </>
  )
}

export default AboutSection