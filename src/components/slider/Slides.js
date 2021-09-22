import React from "react";
import "./Slider.css";
const slidesInfo = [
    {
        src:"https://i.ibb.co/zZxDjwR/Screenshot-1.jpg",
        alt:"Movies App",
        desc: "Movies App",
        href:"https://elnacho02.github.io/movies-app/"
    },
    {
        src:"https://i.ibb.co/VYvC7k6/Screenshot-12.jpg",
        alt:"Project 2",
        desc: "Project 2",
        href: "https://elnacho02.github.io/weather-app/"
    },
    {
        src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt:"Project 3",
        desc: "Project 3"
    }
]

const slides = slidesInfo.map(slide=>(
    <div className="slide-container">
        <a href={slide.href} target="_blank" rel="noreferrer">
            <img src={slide.src} alt={slide.alt}/>
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;