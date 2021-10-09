import React from 'react'

import "../webskills/WebSkills.css"


function BackSkills() {
    const seleccionarIcon=(x)=>{
        setSkillSelected(x)
    }
    var [skillSelected, setSkillSelected] = React.useState("nodeStars")
    return (
                
                <div class="skillsContainer">
                                
                    <div className="progrLeng">
                    
                    <i onClick={()=>seleccionarIcon("nodeStars")} className={skillSelected==="nodeStars" ? "fab fa-node-js nodeSelected" : "fab fa-node-js node" } ></i>
                    <i onClick={()=>seleccionarIcon("nodejsStars")} className={skillSelected==="nodejsStars" ? "fi fi-nodejs nodejsSelected" : "fi fi-nodejs nodejs" }><span className='spanSkill'>Express</span></i>
                    <i onClick={()=>seleccionarIcon("mysqlStars")} className={skillSelected==="mysqlStars" ? "fi fi-mysql mysqlSelected" : "fi fi-mysql mysql" }></i>
                    <i onClick={()=>seleccionarIcon("mongodbStars")} className={skillSelected==="mongodbStars" ? "fi fi-mongodb mongodbSelected" : "fi fi-mongodb mongodb" }></i>
                   
                    </div>
                        {skillSelected==="nodeStars" &&
                        <div >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star "></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star "></i>
                            <i class="far fa-star"></i>
                        </div>}
                        {skillSelected==="mysqlStars" &&
                        <div >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star "></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star "></i>
                            <i class="far fa-star"></i>
                        </div>}
                        {skillSelected==="mongodbStars" &&
                        <div >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star "></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star "></i>
                            <i class="far fa-star"></i>
                        </div>}
                        {skillSelected==="nodejsStars" &&
                        <div >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star "></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star "></i>
                            <i class="far fa-star"></i>
                        </div>}
                        
                        
                                
                    </div>
    )
}

export default BackSkills