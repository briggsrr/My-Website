import React, { useState } from 'react'
import AboutSection from '../components/AboutSection';
import CreationSection from '../components/CreationSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection/>
    <AboutSection/>
    <ExperienceSection/>
    <CreationSection/>
    <Footer/>
    </>
  );
};

export default Home