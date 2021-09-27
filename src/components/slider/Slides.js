import React from "react";
import "./Slider.css";
const slidesInfo = [
   {
        src:"https://i.ibb.co/Wp65SvV/Screenshot-1.jpg",
        alt:"Weather App",
        desc: "Weather App",
        href: "https://modest-thompson-d7ba63.netlify.app/#/"
    },
    {
        src:"https://i.ibb.co/3TSn6TV/Screenshot-1.jpg",
        alt:"Movies App",
        desc: "Movies App",
        href:"https://sleepy-poitras-8a039c.netlify.app/"
    },
    {
        src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt:"Project 3",
        desc: "Project 3"
    },
    {
        src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt:"Project 4",
        desc: "Project 4"
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