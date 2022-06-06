import React from 'react'


const Loading = () => {
  return (
    <div className="container">
        <img src="./src/assets/bg_loader.jpg" alt="" />
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