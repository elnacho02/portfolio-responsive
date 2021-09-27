import React from 'react';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";


const Slider = () => {
    
    return (
        <div className="carousel-container" id="projects">
            <div className="carousel-title" >
                <h2>My Projects</h2>
            </div>

             <Carousel 
                
                plugins={["arrows","centered",
                  
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                     numberOfSlides: 2
                    }
                  },
                  
                  
                ]}
                offset={20}
                breakpoints={{
                  960:{
                      plugins: ['centered',"arrows",
                          {
                            resolve: slidesToShowPlugin,
                            options: {
                             numberOfSlides: 1
                            }
                          },
                          
                          
                        ],
                  }
                  
              }}
              slides={Slides}  
                
                /> 
            
            
            
        </div>
    )
}

export default Slider
