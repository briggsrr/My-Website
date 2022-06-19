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
    <AboutContainer>
        <AboutWrapper>
        <AboutHeader>
        /about-me
            <AboutRow>
                <Column1>
                    <TextWrapper>
                        <Description>
                        Hi, my full name is Robert Douglas Briggs III, 
                        but you can call me Bobby. 
                        I am from San Diego, CA, and currently in my third 
                        year pursuing my BS in computer science at
                         UC Santa Barbara.  So far, 
                         some technologies 
                         I have been working with in all 
                         settings are:
                        
                         <List>
                           C++ (fluent) <br></br>
                           Python (proficient) <br></br>
                           Javascript proficient) <br></br>
                           React.js (proficient) <br></br>
                           HTML and CSS (proficient) <br></br>
                           UNIX (proficient) <br></br> 
                         </List>

                            Outside of work and technology, some of my hobbies include
                            pickle ball, body surfing, spike ball, poker, lacrosse, and golf. 
                            If you're looking for me, I most likely can be found at the beach or gym. 
                         </Description>
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