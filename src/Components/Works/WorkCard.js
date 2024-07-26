import { NavLink } from "react-router-dom";
import "./WorkCardStyle.css";
import proj1 from "../assets/Import-restapi-plugin.png"
import proj2 from "../assets/Laravel-Add-To-Shopping-Cart.png"
import proj3 from "../assets/portfolio.png"
import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={proj1} alt="image"/>
                <h2>REST API with cron auto import Woocommerce Products</h2>
                <div className="project-details">
                    <p>Technologies: HTML, CSS, PHP, Wordpress, Third Party API, JQuery, Ajax, JSON</p>
                    <NavLink to="https://nandydev.github.io/Product-Import-REST-API-Docs/" className="proj-btn">View</NavLink>
                </div>
            </div>

            <div className="project-card">
                <img src={proj3} alt="image"/>
                <h2>Portfolio Website</h2>
                <div className="project-details">
                    <p>Technologies: HTML, CSS, Bootstrap, Javascript</p>
                    <NavLink to="https://github.com/nandydev/My-Portfolio" className="proj-btn">View</NavLink>
                </div>
            </div>

            <div className="project-card">
                <img src={proj2} alt="image"/>
                <h2>Laravel E-Shopping Cart Website</h2>
                <div className="project-details">
                    <p>dTechnologies: HTML, CSS, PHP, Laravel, MySQL</p>
                    <NavLink to="https://github.com/nandydev/lara-addtocart" className="proj-btn">View</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard