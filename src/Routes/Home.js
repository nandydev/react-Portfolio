import React from 'react'
import Navbar from '../Components/Navbar/Navbar.js';
import HeroImg from '../Components/Banner/HeroImg.js'
import Project from '../Components/Works/WorkCard.js'
import About from '../Components/About/AboutContent.js'
import Footer from '../Components/Footer/Footer.js';
import Contact from '../Components/Contact/Form.js';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Project/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}


export default Home