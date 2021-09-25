import React from 'react';
import "./Navbar.css";
import { Link } from 'react-scroll';

const Navbar = (props) => {
    const toBot = ()=>{
        window.scrollTo({top: 3000, left:0, behavior:'smooth'});
    }
    
    if(props.lang === "en"){
        return (
            <nav className={`navbar ${props.isScrolling > 20 ? "scrolling" : null}`}>
                <Link className="navbar-logo" to="projects" smooth={true} duration={1000}>My Projects</Link>
                <Link className="navbar-logo" to="about" smooth={true} duration={1000}>About Me</Link>
                <Link className="navbar-logo" onClick={toBot}>Contact</Link>
                <div className="lang-container">
                
                    <button onClick={props.changeLang} className={props.lang === "en" ? "en-clicked" : "en"}>
                        <span className="flag-icon flag-icon-us"></span>
                    </button>
                    <button onClick={props.changeLang}  className={props.lang === "es" ? "es-clicked" : "esp"}>
                        <span className="flag-icon flag-icon-es"></span>
                    </button>
                    
                        
                </div>
            </nav>
        )}
        else{
            return (
                <nav className={`navbar ${props.isScrolling > 20 ? "scrolling" : null}`}>
                    <Link className="navbar-logo" to="projects" smooth={true} duration={1000}>Mis Proyectos</Link>
                    <Link className="navbar-logo" to="about" smooth={true} duration={1000}>Sobre Mí</Link>
                    <Link className="navbar-logo" onClick={toBot}>Contacto</Link>
                    <div className="lang-container">
                    
                        <button onClick={props.changeLang} className={props.lang === "en" ? "en-clicked" : "en"}>
                            <span className="flag-icon flag-icon-us"></span>
                        </button>
                        <button onClick={props.changeLang}  className={props.lang === "es" ? "es-clicked" : "esp"}>
                            <span className="flag-icon flag-icon-es"></span>
                        </button>
                        
                            
                    </div>
                </nav>
            )
        }
}

export default Navbar
