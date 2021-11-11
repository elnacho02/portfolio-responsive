import React from 'react'
import "./Cover.css"
import coverVideo from "../../media/video.mp4";
const Cover = ({lang}) => {
   if(lang==="en"){ 
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <h1 >ignacio aranda</h1>
            <p title='Web Developer'>Web Developer</p>
        </div>
    )}else{
        return (
            <div className="cover-container">
                <video className="video" src={coverVideo} autoPlay loop muted/>
                <h1>ignacio aranda</h1>
                <p title='Desarrollador Web'>Desarrollador Web</p>
            </div>
        )
    }
}

export default Cover
