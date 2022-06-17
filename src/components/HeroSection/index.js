import React from 'react'
import Typewriter from "typewriter-effect";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroP,
    HeroH1  
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="Home">
        <HeroBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>
            <Typewriter onInit={(typewriter)=> {
            typewriter
   
            .typeString("Hi, Bobby Here.")
            .pauseFor(1600)
            .deleteAll()
            .typeString("Welcome To My Site.")
            .pauseFor(1300)
            .deleteAll()
            .typeString("Enjoy Your Stay.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("How Are You?")
            .pauseFor(300)
            .deleteAll()
            .typeString("Good. Me too.")
            .pauseFor(300)
            .deleteAll()
            .typeString("I Hope I Was Right.")
            .pauseFor(300)
            .deleteAll()
            .typeString("Try 'Click Me!'.")
            .pauseFor(400)
            .deleteAll()
            .typeString("It's Bobby Again, Hi.")
            .pauseFor(10000)
            .deleteAll()
            .typeString("You're still here?")
            .start();
            
            }}
            />
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