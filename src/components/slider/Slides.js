import React from "react";
import "./Slider.css";
const slidesInfo = [
    {
        src:"https://i.ibb.co/YDmThBR/Screenshot-1.jpg",
        alt:"Pokemon PI",
        desc: "Pokemon",
        href:"https://www.linkedin.com/feed/update/urn:li:activity:6862074412095672320/"
    },

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
    /* {
        src:"https://i.ibb.co/HFxQK6J/Screenshot-1.jpg",
        alt:"Crypto App",
        desc: "Crypto App",
        href: "https://615c89f921e6501888cfdb6e--xenodochial-easley-6580f7.netlify.app/"
    } */
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