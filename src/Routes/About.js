import React from 'react'
import Navbar from '../Components/Navbar/Navbar.js';
import Footer from '../Components/Footer/Footer.js';
import HeroImg2 from '../Components/Banner/HeroImg2.js'
import AboutContent from '../Components/About/AboutContent.js'
const About = () => {
  return (
   <div>
    <Navbar/>
    <HeroImg2 heading="About" text="I am a Backend Developer"/>
    <AboutContent/>
    <Footer/>
   </div>
  )
}

export default About