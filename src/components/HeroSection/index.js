import Typewriter from "typewriter-effect";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroP,
    HeroH1,
    HeroBtnWrapper,
    Button

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
   
            .typeString("Hey, it's me Bobby.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcome to my site.") 
            .pauseFor(800000)
            .deleteAll()
            .typeString("You're still here?")
            .start();
            
            }}
            />
            </HeroH1>
            <HeroP>
            I'm a hardworking student with a zest 
            for new technologies. 
            Background in testing, evaluating, designing and implementing solutions. 
            Enthusiastic about full-stack develop, computer vision, computer security, machine learning, 
            database systems, human-computer interaction and everything in between.
            </HeroP>
            <HeroBtnWrapper>
            <Button onClick={() => window.location.href = 'mailto:rbriggs@ucsb.edu'}>
              /email-me
          </Button>
            </HeroBtnWrapper>

        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

