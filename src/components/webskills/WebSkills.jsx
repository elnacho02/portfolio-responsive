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
                        <i  onClick={()=>seleccionarIcon("reactStars")} class={skillSelected==="reactStars" ? "fab fa-react reactSelected" : "fab fa-react react" } ></i>
                        <i  onClick={()=>seleccionarIcon("reduxStars")} class={skillSelected==="reduxStars" ? "fi fi-redux reduxSelected" : "fi fi-redux redux" }></i>
                        <i  onClick={()=>seleccionarIcon("cssStars")} class={skillSelected==="cssStars" ? "fab fa-css3 css3Selected" : "fab fa-css3 css3" } ></i>
                    </div>
                        
                </div>
    )
}

export default WebSkills
