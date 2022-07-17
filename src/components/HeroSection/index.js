import ReactTypingEffect from 'react-typing-effect';
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroP,
    HeroH1,
    HeroBtnWrapper,
    Button,


} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>
            <ReactTypingEffect
        text={["Hi, Bobby here."]}
      
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        speed = {200}
        eraseDelay={100000}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span 
                    key={key}
                    style={ (i < 9 && i > 3)? { color:  "#64ffda"} : { color: "#cbd6f6"}}
                    
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
            </HeroH1>
            <HeroP>
            I'm an undergraduate student with a zest 
            for new technologies. 
            Background in testing, evaluating, designing and implementing solutions. 
            Enthusiastic about full-stack development, computer vision, data structures, machine learning, 
            distributed systems, human-computer interaction and everything in between.
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

