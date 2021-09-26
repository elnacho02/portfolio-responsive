import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "./Slider2.css"
function Slider2() {
    const slidesInfo = [
        {
             src:"https://i.ibb.co/ZgqbY02/clima.jpg",
             alt:"Weather App",
             desc: "Weather App",
             href: "https://modest-thompson-d7ba63.netlify.app/#/"
         },
         {
             src:"https://i.ibb.co/Zx8HVPQ/movies.jpg",
             alt:"Movies App",
             desc: "Movies App",
             href:"https://sleepy-poitras-8a039c.netlify.app/"
         },
         {
             src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
             alt:"Project 3",
             desc: "Project 3"
         }
     ]
  
    return (
        <div className="carouselContainer" id="projects">
            <h2>MY PROJECTS</h2>
            <Carousel className="slidesContainer" infiniteLoop={true} showStatus={false} >
                <a href={slidesInfo[0].href}>
                    <div>
                        <img src={slidesInfo[0].src} alt={slidesInfo[0].desc} />
                        <div className="slidesDesc">
                            <span>{slidesInfo[0].desc}</span>
                        </div>
                    </div>
                </a>   
                <a href={slidesInfo[1].href}>
                    <div>
                        <img src={slidesInfo[1].src} alt={slidesInfo[1].desc} />
                        <div className="slidesDesc">
                            <span>{slidesInfo[1].desc}</span>
                        </div>
                    </div>
                </a> 



            </Carousel>
        </div>
    )
}

export default Slider2
