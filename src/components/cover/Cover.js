import React from 'react'
import "./Cover.css"
import coverVideo from "../../media/coverVideo.mp4";
const Cover = ({lang}) => {
   if(lang==="en"){ 
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <h1>Ignacio Aranda</h1>
            <p>Web Developer</p>
        </div>
    )}else{
        return (
            <div className="cover-container">
                <video className="video" src={coverVideo} autoPlay loop muted/>
                <h1>Ignacio Aranda</h1>
                <p>Desarrollador Web</p>
            </div>
        )
    }
}

export default Cover
