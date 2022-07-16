import React from 'react'

import {
    CreationContainer,
    CreationWrapper,
    CreationHeader,
    ProjectWrapper,
    ProjectCard,
    ProjectH2,
    ProjectP, 
    ProjectP2,
    ProjImg,
    MyLink
} from './CreationElements'

const CreationSection = () => {
  return (
    <CreationContainer id ="creation">
        <CreationWrapper >
            <CreationHeader>
                /software-creations
            </CreationHeader>
            <ProjectWrapper id ="creation">
                <MyLink href="https://github.com/briggsr3/Python-Minecraft" target="_blank" rel="noopener noreferrer">
                <ProjectCard>
                <ProjImg src={require('../../images/GitHub-Mark.png')}/>
                    <ProjectH2>
                        Python Minecraft 
                    </ProjectH2>
                    <ProjectP>
                        A python-replica of the popular game minecraft
                        with exploding tnt, real-world physics, 
                        textures, player movement, biomes, chunks, creative mode and so much more.

                    </ProjectP>
                    <ProjectP2>
                        Python, Pyglet, PyGame
                    </ProjectP2>
                </ProjectCard>
                </MyLink>
                <MyLink href="https://github.com/briggsr3/BST-Movie-Sorter" target="_blank" rel="noopener noreferrer">
                <ProjectCard>
                <ProjImg src={require('../../images/GitHub-Mark.png')}/>
                    <ProjectH2>
                        BST Movie Sorter 
                    </ProjectH2>
                    <ProjectP>
                        A binary search tree implementated program that 
                        recieves a file of movies and their ratings, sorts them by name, then, given 
                        an inputted prefix, sorts by rating.
                    </ProjectP>
                    <ProjectP2>
                        C++, Makefile
                    </ProjectP2>
                </ProjectCard>
                </MyLink>

                
                <MyLink href="https://github.com/briggsrr/PCA-Reduction" target="_blank" rel="noopener noreferrer">
                <ProjectCard>
                <ProjImg src={require('../../images/GitHub-Mark.png')}/>
                    <ProjectH2>
                        PCA-Reduction
                    </ProjectH2>
                    <ProjectP>
                    A program that takes a dataset file and produces a screeplot 
                    for analyzing the PC components as well as the
                     dataset projected on the first two PC components.
                    </ProjectP>
                    <ProjectP2>
                        Python, matplotlib, sklearn
                    </ProjectP2>
                </ProjectCard>
                </MyLink>

                <MyLink href="https://github.com/briggsr3/Python-Minecraft" target="_blank" rel="noopener noreferrer">
                <ProjectCard>
                <ProjImg src={require('../../images/GitHub-Mark.png')}/>
                    <ProjectH2>
                        NULL
                    </ProjectH2>
                    <ProjectP>
                        example example example example example  
                        example example example example example 
                        example example example example example 
                        example example example example example 
                        example example example example 
                    </ProjectP>
                    <ProjectP2>
                        One, Two, Three
                    </ProjectP2>
                </ProjectCard>
                </MyLink>

                <MyLink href="https://github.com/briggsr3/Python-Minecraft" target="_blank" rel="noopener noreferrer">
                <ProjectCard>
                <ProjImg src={require('../../images/GitHub-Mark.png')}/>
                    <ProjectH2>
                        NULL
                    </ProjectH2>
                    <ProjectP>
                        example example example example example  
                        example example example example example 
                        example example example example example 
                        example example example example example 
                        example example example example 
                    </ProjectP>
                    <ProjectP2>
                        One, Two, Three
                    </ProjectP2>
                </ProjectCard>
                </MyLink>

                <MyLink href="https://github.com/briggsr3/Python-Minecraft" target="_blank" rel="noopener noreferrer">
                <ProjectCard>
                <ProjImg src={require('../../images/GitHub-Mark.png')}/>
                    <ProjectH2>
                        NULL
                    </ProjectH2>
                    <ProjectP>
                        example example example example example  
                        example example example example example 
                        example example example example example 
                        example example example example example 
                        example example example example 
                    </ProjectP>
                    <ProjectP2>
                        One, Two, Three
                    </ProjectP2>
                </ProjectCard>
                </MyLink>

                
            </ProjectWrapper>
        </CreationWrapper>
    </CreationContainer>

  )
}

export default CreationSection