import React from 'react'
import "./SideBar.css";
import { useState } from 'react';
import WebSkills from '../webskills/WebSkills';

const Info = ({lang}) => {
    var [selected, setSelected]=useState("skills")
    const seleccionar= (x)=>{
        setSelected(x)
    }
    var [skillsSelected, setSkillSelected] = useState("front")
    
    if(lang==="es"){
    return (
            <div className="sidebarContainer" id="skills">
                <div className="sideMenuContainer">
                        <span onClick={()=>seleccionar("skills")}  className={selected==="skills"? "skills" : "sectionSpan"}>HABILIDADES</span>
                        <span onClick={()=>seleccionar("education")} className={selected==="education"? "educacion" : "sectionSpan"}>EDUCACIÓN</span>
                </div>
                <div className="sideInfoContainer">
                        {selected==="education" && 
                        <div>
                            <h4>Educación</h4>
                            <hr />
                            <br />
                            <strong>Universidad Siglo 21</strong>
                            <p className="educationP"> Estudiante de segundo año en la carrera de Informatica. 2020/presente</p>
                            <br />
                            <strong>Henry Bootcamp</strong>
                            <p className="educationP">Full Stack web developer bootcamp. Terminado en 12/2021. </p>
                        </div>}
                        {selected==="skills" && 
                        <div> 
                             <div className="botonesContainer">
                                 <div className={skillsSelected==="front" ? "frontSelected":"front"} onClick={()=>setSkillSelected("front")}>
                                    <h4>FRONT</h4>
                                 </div>
                                 <div className={skillsSelected==="back" ? "backSelected":"back"} onClick={()=>setSkillSelected("back")}>
                                    <h4>BACK</h4>
                                 </div>
                                 <div className={skillsSelected==="other" ? "otherSelected":"other"} onClick={()=>setSkillSelected("other")}>
                                    <h4>OTHERS</h4>
                                 </div>
                             </div>
                             <br />
                             {skillsSelected==="front" && <WebSkills />}
                             <br />
                            <strong>Idiomas</strong>
                            <hr />
                            <div className="idiomasLevel">
                                <div className="banderaLevel">
                                    <span className="flag-icon flag-icon-us"></span><span className="span">Ingles Intermedio (B1)</span>
                                </div>
                                <div className="banderaLevel">
                                    <span className="flag-icon flag-icon-br"></span><span className="span">Portugues Basico  (A2)</span>
                                </div>
                                <div className="banderaLevel">
                                    <span className="flag-icon flag-icon-es"></span><span className="span">Español Nativo</span>
                                </div>
                            </div>
                        </div>}
                </div>
                
            </div>
        )}
        else{
            return (
                <div className="sidebarContainer" id="skills" >
                    <div className="sideMenuContainer">
                            <span onClick={()=>seleccionar("skills")}  className={selected==="skills"? "skills" : "sectionSpan"}>SKILLS</span>
                            <span onClick={()=>seleccionar("education")} className={selected==="education"? "educacion" : "sectionSpan"}>EDUCATION</span>
                    </div>
                    <div className="sideInfoContainer">
                            {selected==="education" && 
                            <div>
                                <h4>Education</h4>
                                <hr />
                                <br />
                                <strong>Universidad Siglo 21</strong>
                                <p className="educationP"> Student in second year of Informatic´s carreer. 2020/present</p>
                                <br />
                                <strong>Henry Bootcamp</strong>
                                <p className="educationP">Full Stack web developer bootcamp. Finished in 12/2021. </p>
                            </div>}
                            {selected==="skills" && 
                            <div>
                               <div className="botonesContainer">
                                 <div className={skillsSelected==="front" ? "frontSelected":"front"} onClick={()=>setSkillSelected("front")}>
                                    <h4>FRONT</h4>
                                 </div>
                                 <div className={skillsSelected==="back" ? "backSelected":"back"} onClick={()=>setSkillSelected("back")}>
                                    <h4>BACK</h4>
                                 </div>
                                 <div className={skillsSelected==="other" ? "otherSelected":"other"} onClick={()=>setSkillSelected("other")}>
                                    <h4>OTHERS</h4>
                                 </div>
                             </div>
                             <br />
                             {skillsSelected==="front" && <WebSkills />}
                                <br />
                                <strong>Lenguages</strong>
                                <hr />
                                <div className="idiomasLevel">
                                    <div className="banderaLevel">
                                        <span className="flag-icon flag-icon-us"></span><span className="span">English Intermediate (B1)</span>
                                    </div>
                                    <div className="banderaLevel">
                                        <span className="flag-icon flag-icon-br"></span><span className="span">Portugues Basic (A2)</span>
                                    </div>
                                    <div className="banderaLevel">
                                        <span className="flag-icon flag-icon-es"></span><span className="span">Spanish Native</span>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    
                </div>
            )
        }
    
}

export default Info