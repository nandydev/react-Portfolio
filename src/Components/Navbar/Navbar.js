import {Link} from "react-router-dom";
import React, { useState } from 'react';
import "./NavbarStyle.css"
import { FaBars, FaTimes } from "react-icons/fa";
import resumePDF from '../assets/resume.pdf';
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        console.log(click ? 'true' : 'false');
    };

    const [color, setColor] = useState(false);
  
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
        // console.log(setColor);
    }
 
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h2>Portfolio</h2>
        </Link>
        <ul className={click ? "nav-menus active" : "nav-menus"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
               
        </ul>
        <div className="resume">
            <a href={resumePDF} download="resume.pdf">
                Download Resume
            </a>
        </div>
        <div className="respon-arrow" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}
        </div>

    </div>
  )
}

export default Navbar