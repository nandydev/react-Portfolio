import React from 'react'
import Navbar from '../Components/Navbar/Navbar.js';
import Footer from '../Components/Footer/Footer.js';
import HeroImg2 from '../Components/Banner/HeroImg2.js'
import From from '../Components/Contact/Form.js'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact" text="lets have a chat"/>
      <From/>
      <Footer/>
    </div>
  )
}

export default Contact