import React from 'react'
import "./Info.css";
const Info = (props) => {
    if(props.lang === "en"){
        return (
            <div className="info-container">
                <div className="info">
                    <h1>Let´s work together and create something unique</h1>
                </div>
                
            </div>
        )
    }else{
        return (
            <div className="info-container">
                <div className="info">
                    <h1>Trabajemos juntos para crear algo único</h1>
                </div>
                
            </div>
        )
    }
}

export default Info
