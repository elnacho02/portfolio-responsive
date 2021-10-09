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
                    <i  onClick={()=>seleccionarIcon("htmlStars")} class={skillSelected==="htmlStars" ? "fi fi-redux html5Selected" : "fi fi-redux html5" }></i>
                    <i  onClick={()=>seleccionarIcon("cssStars")} class={skillSelected==="cssStars" ? "fab fa-css3 css3Selected" : "fab fa-css3 css3" } ></i>
                    <i  onClick={()=>seleccionarIcon("reactStars")} class={skillSelected==="reactStars" ? "fab fa-react reactSelected" : "fab fa-react react" } ></i>
                    <i  onClick={()=>seleccionarIcon("reactnativeStars")} class={skillSelected==="reactStars" ? "fab fa-react reactSelected" : "fab fa-react react" } ><span className='spanSkill'>Native</span></i>
                    
                    
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
                                {skillSelected==="reactnativeStars" &&
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
