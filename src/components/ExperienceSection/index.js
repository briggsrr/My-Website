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
    Colored

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
                  Fill in later, once internship temrinates. NULL NULL NULL  
                      NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  
                      NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  
                    <br></br><Colored>&#8226;</Colored> 
                    NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  
                    NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  
                    <br></br><Colored>&#8226;</Colored>
                    NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  NULL NULL NULL  
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
                  <Colored>&#8226; </Colored> 
                  Designed a custom website from scratch using Wordpress.
                    <br></br><Colored>&#8226; </Colored>  
                  Crafted custom plugins for widget implementation including a morgage and maintenence fee calculator.
                    <br></br><Colored>&#8226; </Colored>
                  Created images, redirect links, and a live chatboxfor use in marketing and email campaigns.
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
                    Software Developer Intern 
                  </RoleTitle>
                <RoleTime>
                    06/18 - 08/18
                </RoleTime>
                </WorkInstance>
                </RowTop>
                <RowBottom> 
                  <RoleTasks>
                  <Colored>&#8226; </Colored> 
                   Translated clientele website content from Chinese to English. 
                    <br></br><Colored>&#8226; </Colored>  
                    Ensured project tasks were on schedule.
                    <br></br><Colored>&#8226; </Colored>
                    Shadowed software engineers professionals to learn industry approaches.
                  </RoleTasks>
                </RowBottom>
               </ExperienceRow2>



        </ExperienceWrapper>
    </ExperienceContainer>
    </>
  )
}

export default ExperienceSection