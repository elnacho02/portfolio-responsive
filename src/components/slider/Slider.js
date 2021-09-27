import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const Slider = () => {
    
    return (
        <div className="carousel-container" id="projects">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>

             <Carousel 
                plugins={[
                    'arrows','centered',
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                       numberOfSlides: 2
                      }
                    }
                  ]}
                animationSpeed={200}
                offset={50}
                itemWidth={350}
                slides={Slides}
                breakpoints={{
                    960:{
                        plugins: ["centered","infinite",
                            {
                              resolve: slidesToShowPlugin,
                              options: {
                               numberOfSlides: 4
                              }
                            },
                          ],
                        itemWidth: 250 
                        
                    }
                }}
            /> 
            
            
            
        </div>
    )
}

export default Slider
