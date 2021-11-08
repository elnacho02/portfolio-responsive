import React from 'react'
import "./About.css";

function About(props) {
    if(props.lang === "en"){
        return (
            <div className="about-container" id="about" >
                <div className="about-desc" >
                    <h3 >Hi, I am Ignacio!</h3>
                    <p>Im a 19yo Web Developer from Argentina<span className="flag-icon flag-icon-ar">
                    </span> <br/> Also, im a second year student of Software Engineering carreer at Siglo 21 college. I started my programming carreer at Henry´s Bootcamp, there i acquired skills to be a Full Stack Web Developer.</p> 
                    
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt=""/>
            </div>      
            </div>
        )
    }else{
        return (
            
            <div className="about-container" id="about">
                <div className="about-desc" >
                    <h3 >Hola, soy Ignacio!</h3>
                    <p>Tengo 19 años y soy un programador web de Argentina<span className="flag-icon flag-icon-ar"></span> <br/>
                    Soy estudiante de segundo año en la carrera de Ingenieria en Software de Universidad Siglo 21. Empecé mi carrera de programador en Henry Bootcamp, donde adquirí habilidades para ser Full Stack Web Developer. </p> 
                    
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt=""/>
            </div>      
            </div>
        )  
        }
}

export default About
