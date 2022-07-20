import React from 'react'
import { Container,
    HomeLink,
    NavbarContainer,
    ClickerContainer,
    DataButton
      
  
  } from './DatabaseElements'

const DatabaseNavbar = () => {
  return (
    <>
        <Container>
          <NavbarContainer>
            <HomeLink to="/">&#47;&#47;home </HomeLink>

              <ClickerContainer>
 
                  <DataButton onClick={() => this.setData()}> Set Data </DataButton>
                 
                  <DataButton onClick={() => this.setData()}> Get Data </DataButton>
                  
                  

              </ClickerContainer>

      
          </NavbarContainer>
        </Container>
    
    
    </>
  )
}

export default DatabaseNavbar