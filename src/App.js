import React from "react";
import "./index.css";
import Home from "./Routes/Home.js";
import Project from "./Routes/Project.js";
import About from "./Routes/About.js";
import Contact from "./Routes/Contact.js";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
