import React from 'react'
import "./About.css";

function About(props) {
    if(props.lang === "en"){
        return (
            <div className="about-container" id="about" >
                <div className="about-desc" >
                    <h3 >Let me tell you about me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis lorem. Lorem ipsum dolor sit amet, consectetur adip lorem. Lorem ipsum dolor sit amet, consectlorem. Lorem ipsum d</p> 
                    
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
                    <h3 >Dejenme contarles sobre mí</h3>
                    <p>Lo mismo pero en español, sobre mi sobre mi. Lorem ipsum dolor sit amet, consectetur adip lorem. Lorem ipsum dolor sit amet, consectlorem. Lorem ipsum d</p> 
                    
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt=""/>
            </div>      
            </div>
        )  
        }
}

export default About
