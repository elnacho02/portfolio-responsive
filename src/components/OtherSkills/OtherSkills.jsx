import React from 'react'
import {ReactComponent as PostgresLogo} from '../../media/postgresql.svg';
import {ReactComponent as MongoLogo} from '../../media/mongodb.svg';

import "../webskills/WebSkills.css"



function OtherSkills() {
    const seleccionarIcon=(x)=>{
        setSkillSelected(x)
    }
    var [skillSelected, setSkillSelected] = React.useState("nodeStars")
    return (
                
                <div class="skillsContainer">
                                
                    <div className="progrLeng">
                    WORKING ON...
                    {/* <i onClick={()=>seleccionarIcon("nodeStars")} className={skillSelected==="nodeStars" ? "fab fa-node-js nodeSelected" : "fab fa-node-js node" } ></i> */}
                    {/* <MongoLogo onClick={()=>seleccionarIcon("mongodbStars")} className={skillSelected==="mongodbStars" ? "mongodbSelected" : "mongodb" }/>
                    <PostgresLogo onClick={()=>seleccionarIcon("postgresqlStars")} className={skillSelected==="postgresqlStars" ? "postgresqlSelected" : "postgresql" }/> */}
                    </div>                                       
                </div>
    )
}

export default OtherSkills