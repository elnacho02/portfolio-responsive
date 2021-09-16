import React from 'react';
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
    const toTheTop = ()=>{
        window.scrollTo({top: 0, left:0, behavior:'smooth'});
    }
    
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>My Projects</div>
            <div className="navbar-logo" onClick={toTheTop}>About Me</div>
            <div className="navbar-logo" onClick={toTheTop}>Contact</div>
        </nav>
    )
}

export default Navbar
