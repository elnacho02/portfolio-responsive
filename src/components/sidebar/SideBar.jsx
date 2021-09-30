import React from 'react'
import "./SideBar.css";
import { useState } from 'react';
const Info = ({lang}) => {
    var [selected, setSelected]=useState("skills")
    const seleccionar= (x)=>{
        setSelected(x)
    }
    const seleccionarIcon=(x)=>{
        setSkillSelected(x)
    }

    var [skillSelected, setSkillSelected] = useState("jsStars")
    
    if(lang==="es"){
    return (
            <div className="sidebarContainer" >
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
                            
                            <p className="mystackP">
                             Usando <strong>Javascript</strong>, <strong>HTML</strong>, <strong>CSS</strong> librerias/frameworks como<strong>React/React-Redux</strong>  en front-end. <strong>MySql</strong>, <strong>MongoDB</strong> y <strong>NodeJs</strong>.
                            </p>
                            <br />
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
                <div className="sidebarContainer" >
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
                                
                                <p className="mystackP">
                                 Using <strong>Javascript</strong>, <strong>HTML</strong>, <strong>CSS</strong> libraries/frameworks like <strong>React/React-Redux</strong>  in front-end. <strong>MySql</strong>, <strong>MongoDB</strong> and <strong>NodeJs</strong>.
                                </p>
                                <br />
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