import React from 'react'

import {
    ExperienceContainer,
    ExperienceWrapper,
    ExperienceHeader,
    WorkInstance,
    JobTitle,
    RoleTitle,
    RoleTime,
    RowTop,
    RowBottom,
    RoleTasks,
    ExperienceRow,
    ExperienceRow2,
    Colored,
    Point

} from './ExperienceElements'
const ExperienceSection = () => {
  return (
    <>
    <ExperienceContainer id ="experience">
        <ExperienceWrapper>
            <ExperienceHeader>
                /experience 
            </ExperienceHeader>

            
            <ExperienceRow> 
              <RowTop>
                <WorkInstance>
                <JobTitle>
                    Qualcomm
                </JobTitle>
                <RoleTitle>
                    Software Engineering Intern
                  </RoleTitle>
                <RoleTime>
                    06/22 - 09/22
                </RoleTime>
                </WorkInstance>
                </RowTop>
                <RowBottom> 
                  <RoleTasks>
                  <Colored>&#8226;</Colored> 
        
                    <br></br><Colored>&#8226;</Colored> 
               
                    <br></br><Colored>&#8226;</Colored>
                    
                  </RoleTasks>
                </RowBottom>
               </ExperienceRow>




               <ExperienceRow2> 
              <RowTop>
                <WorkInstance>
                <JobTitle>
                    Seaside Consultants Group 
                </JobTitle>
                <RoleTitle>
                    Frontend Web Developer
                  </RoleTitle>
                <RoleTime>
                    06/19 - 08/19
                </RoleTime>
                </WorkInstance>
                </RowTop>
                <RowBottom> 
                  <RoleTasks>
                  <Point>
                  <Colored>&#8226; </Colored> 
                  Designed a custom website from scratch using Wordpress, HTML, and CSS.
                  </Point>
                  <Point>
                    <br></br><Colored>&#8226; </Colored>  
                  Crafted custom plugins for client including a morgage and maintenence fee calculator.
                  </Point>
                  <Point>
                    <br></br><Colored>&#8226; </Colored>
                  Integrated data storage and a live chatbox for use in marketing and email campaigns.
                  </Point>
                  </RoleTasks>
                </RowBottom>
               </ExperienceRow2>


               <ExperienceRow2> 
              <RowTop>
                <WorkInstance>
                <JobTitle>
                    Meijun 
                </JobTitle>
                <RoleTitle>
                    Software Engineering Intern 
                  </RoleTitle>
                <RoleTime>
                    06/18 - 08/18
                </RoleTime>
                </WorkInstance>
                </RowTop>
                <RowBottom> 
                  <RoleTasks>

                  <Point>
                  <Colored>&#8226; </Colored> 
                   Translated clientele website content from Chinese to English. 
                  </Point>
                   <Point>
                    <br></br><Colored>&#8226; </Colored>  
                    Ensured project tasks were on schedule.
                    </Point>
                    <Point>
                    <br></br><Colored>&#8226; </Colored>
                    Shadowed software engineering professionals to learn industry approaches.
                    </Point>

                  </RoleTasks>
                </RowBottom>
               </ExperienceRow2>



        </ExperienceWrapper>
    </ExperienceContainer>
    </>
  )
}

export default ExperienceSection