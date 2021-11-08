import React from 'react'
import {ReactComponent as PostgresLogo} from '../../media/postgresql.svg';
import {ReactComponent as MongoLogo} from '../../media/mongodb.svg';
import {ReactComponent as ExpressLogo} from '../../media/expressjs.svg';


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
                    <ExpressLogo onClick={()=>seleccionarIcon("expressStars")} className={skillSelected==="expressStars" ? "expressSelected" : "express" }/>
                    <MongoLogo onClick={()=>seleccionarIcon("mongodbStars")} className={skillSelected==="mongodbStars" ? "mongodbSelected" : "mongodb" }/>
                    <PostgresLogo onClick={()=>seleccionarIcon("postgresqlStars")} className={skillSelected==="postgresqlStars" ? "postgresqlSelected" : "postgresql" }/>
                    </div>
                        {skillSelected==="nodeStars" &&
                        <div >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star "></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star "></i>
                            <i class="far fa-star"></i>
                        </div>}
                        {skillSelected==="postgresqlStars" &&
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
                        {skillSelected==="expressStars" &&
                        <div >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star "></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star "></i>
                            <i class="far fa-star"></i>
                        </div>}                                             
                    </div>
    )
}

export default BackSkills