import React from 'react';
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";
const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>

            <Carousel 
                plugins={["arrows","centered"]}
                slidesPerPage= {3}
                animationSpeed={200}
                offset={50}
                itemWidth={350}
                slides={Slides}
                breakpoints={{
                    960:{
                        slidesPerPage:2,
                        itemWidth:350,
                    }
                }}
            />
        </div>
    )
}

export default Slider
