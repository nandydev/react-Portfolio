import "./HeroImgStyle.css"
// import introImg from "../assets/intro-bg2.jpg";
import banner from "../assets/24033583.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
    // console.log({introImg});
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-image" src={banner} alt="true"/>
        </div>
        <div className="content">
            <p>I'm Nandhini</p>
            <h1>PHP Developer</h1>
           
            <div className="conent-buttons">
                <Link to={"/project"} className="btn">Project</Link>
                <Link to={"/contact"} className="btn btn-light">Contact</Link>
            </div>
          
        </div>
    </div>
  )
}

export default HeroImg