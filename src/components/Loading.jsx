import React from 'react'
import imageBG from "../assets/bg_loader.jpg"


const Loading = () => {
  return (
    <div className="container">
        <img src={imageBG} alt="" />
        <div className="loader">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>            
        </div>
        <span>WEATHER APP</span>
        <p>Juan Pablo Clavijo</p>
    </div>
  )
}

export default Loading