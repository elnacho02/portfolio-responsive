import React from 'react'
import "./WebSkills.css"
function WebSkills() {
    const seleccionarIcon=(x)=>{
        setSkillSelected(x)
    }
    var [skillSelected, setSkillSelected] = React.useState("jsStars")
    return (
                
                <div class="skillsContainer">
                                
                    <div className="progrLeng">
                    <i  onClick={()=>seleccionarIcon("jsStars")} class={skillSelected==="jsStars" ? "fab fa-js jsSelected" : "fab fa-js js" } ></i>
                    <i  onClick={()=>seleccionarIcon("htmlStars")} class={skillSelected==="htmlStars" ? "fab fa-html5 html5Selected" : "fab fa-html5 html5" } ></i>
                    <i  onClick={()=>seleccionarIcon("cssStars")} class={skillSelected==="cssStars" ? "fab fa-css3 css3Selected" : "fab fa-css3 css3" } ></i>
                    <i  onClick={()=>seleccionarIcon("reactStars")} class={skillSelected==="reactStars" ? "fab fa-react reactSelected" : "fab fa-react react" } ></i>
                    <i  onClick={()=>seleccionarIcon("wordpressStars")} class={skillSelected==="wordpressStars" ? "fab fa-wordpress wordpressSelected" : "fab fa-wordpress wordpress" } ></i>

                        </div>
                        {skillSelected==="jsStars" &&
                            <div >
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star "></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star "></i>
                        <i class="far fa-star"></i>
                        </div>}
                        {skillSelected==="htmlStars" &&
                            <div >
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star "></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star "></i>
                                        <i class="far fa-star"></i>
                                </div>}
                                {skillSelected==="cssStars" &&
                                <div >
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star "></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star "></i>
                                        <i class="far fa-star"></i>
                                </div>}
                                {skillSelected==="reactStars" &&
                                <div >
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star "></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star "></i>
                                        <i class="far fa-star"></i>
                                </div>}
                                {skillSelected==="wordpressStars" &&
                                <div >
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star "></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star "></i>
                                        <i class="far fa-star"></i>
                                </div>}
                             </div>
    )
}

export default WebSkills
