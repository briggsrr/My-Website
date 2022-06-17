import React from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="Home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type ='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
            
            </HeroH1>
            <HeroP>
            I'm a hardworking student with a zest 
            for solving complex problems. 
            Background in testing, evaluating, designing and implementing solutions. 
            Enthusiastic about full-stack develop, computer vision, computer security, machine learning, 
            database systems, human-computer interaction and everything in between.
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection