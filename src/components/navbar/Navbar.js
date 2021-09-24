import React from 'react';
import "./Navbar.css";
import { useState } from 'react';

const Navbar = ({ isScrolling }) => {
    const toTheTop = ()=>{
        window.scrollTo({top: 0, left:0, behavior:'smooth'});
    }
    const toAbout = ()=>{
        window.scrollTo({top: 500, left:0, behavior:'smooth'});
    }
    const toContact= ()=>{
        window.scrollTo({top: 2500, left:0, behavior:'smooth'});
    }
    var [lang,setLang] = useState("en");
    
    const changeLang = ()=>{
        if(lang==="es") setLang("en");
        else setLang("es");
    }
    
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>My Projects</div>
            <div className="navbar-logo" onClick={toAbout}>About Me</div>
            <div className="navbar-logo" onClick={toContact}>Contact</div>
            <div className="lang-container">
            
                <button onClick={changeLang} className={lang === "en" ? "en-clicked" : "en"}>
                    <span className="flag-icon flag-icon-us"></span>
                </button>
                <button onClick={changeLang}  className={lang === "es" ? "es-clicked" : "esp"}>
                    <span className="flag-icon flag-icon-es"></span>
                </button>
                
                    
            </div>
        </nav>
    )
}

export default Navbar
