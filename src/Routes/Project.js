import React from 'react'
import Navbar from '../Components/Navbar/Navbar.js';
import Footer from '../Components/Footer/Footer.js';
import HeroImg2 from '../Components/Banner/HeroImg2.js'
import WorkCard from '../Components/Works/WorkCard.js';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="view some of projects"/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project