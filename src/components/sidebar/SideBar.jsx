import React from 'react'
import "./SideBar.css";
import { useState } from 'react';
const Info = () => {
    var [selected, setSelected]=useState("skills")
    const seleccionar= (x)=>{
        setSelected(x)
    }
    
    return (
            <div className="sidebarContainer">
                <div className="sideMenuContainer">
                        <span onClick={()=>seleccionar("skills")}  className={selected==="skills"? "skills" : "sectionSpan"}>SKILLS</span>
                        <span onClick={()=>seleccionar("education")} className={selected==="education"? "educacion" : "sectionSpan"}>EDUCATION</span>
                        <span onClick={()=>seleccionar("jobexp")}  className={selected==="jobexp"? "jobexp" : "sectionSpan"}>JOB EXP</span>
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
                            <strong>Programming Skills</strong>
                            <br />
                            <p className="mystackP">
                                I built my stack at Henry's bootcamp, with my skills focused on front-end development, but without leaving behind back-end to consolidate a complete web development base. <br/>
                                Here what I can use:
                            </p>
                            <strong>Lenguages</strong>
                            <hr />
                            <div className="idiomasLevel">
                                <span className="flag-icon flag-icon-us"></span><span className="span">English Intermediate (B1)</span>
                                <span className="flag-icon flag-icon-br"></span><span className="span">Portugues Basic (A2)</span>
                                <span className="flag-icon flag-icon-es"></span><span className="span">Spanish Native</span>

                            </div>
                        </div>}
                </div>
                
            </div>
        )
    
}

export default Info