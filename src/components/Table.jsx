import React, { useEffect, useState } from 'react'
import switch1 from "../assets/degreeC.png"
import switch2 from "../assets/degreeF.png"
import iconCloud from "../assets/statCloud.png"
import iconPressure from "../assets/statPressure.png"
import iconWind from "../assets/statWind.png"
import iconHumidity from "../assets/statHumidity.png"
import icon1 from "../assets/icons/1.png"
import icon2 from "../assets/icons/2.png"
import icon3 from "../assets/icons/3.png"
import icon4 from "../assets/icons/4.png"
import icon9 from "../assets/icons/9.png"
import icon10 from "../assets/icons/10.png"
import icon11 from "../assets/icons/11.png"
import icon13 from "../assets/icons/13.png"
import icon50 from "../assets/icons/50.png"
import videoClear from "../assets/videos/clear.mp4"
import videoClouds from "../assets/videos/clouds.mp4"
import videoBroken from "../assets/videos/broken.mp4"
import videoRain from "../assets/videos/rain.mp4"
import videoSnow from "../assets/videos/snow.mp4"
import videoStorm from "../assets/videos/storm.mp4"
import videoFog from "../assets/videos/fog.mp4"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Table = ({weather}) => {
  
  //Constructor Date
  const today = new Date();
  const hour= today.getHours();
  const minute= today.getMinutes();
  const day = today.getDate();
  const week = today.toLocaleString('en-us', {weekday: 'long'})
  const month = monthNames[today.getMonth()]
  const year = today.getFullYear();

  //Constructor Element
  const aux = parseFloat(weather?.weather[0].icon) 
  // const imageIcon = `src/assets/icons/${aux}.png`;  
  const tempCelsius = Math.round((weather?.main.temp - 273.15)*10) / 10;
  const tempFahrenheit = Math.round((tempCelsius * (9/5)) + 32 * 10) / 10

  const [degree, setDegree] = useState(true)
  const changeDegree = () => {setDegree(!degree)}

  // Change Background & Icon
  const [background, setBackground] = useState("")
  const [iconTemp, setIconTemp] = useState("")
   
  const changeBG = () => {
    if(aux==1){
      setBackground(videoClear)
      setIconTemp(icon1)
    }else if(aux == 2){
      setBackground(videoClouds)
      setIconTemp(icon2)
    }else if(aux==3){
      setBackground(videoBroken)
      setIconTemp(icon3)
    }else if(aux==4){
      setBackground(videoBroken)
      setIconTemp(icon4)
    }else if(aux==9){
      setBackground(videoRain)
      setIconTemp(icon9)
    }else if(aux==10){
      setBackground(videoRain)
      setIconTemp(icon10)
    }else if(aux === 11){
      setBackground(videoStorm)
      setIconTemp(icon11)
    }else if(aux === 13){
      setBackground(videoSnow)
      setIconTemp(icon13)
    }else{
      setBackground(videoFog)
      setIconTemp({icon50})
    }  
  }    
  useEffect(() => {changeBG()}, [aux])

  return (
    <div className="Table">
      
      <video id="videoBG" src={background} type="video/mp4" autoPlay muted loop></video>

      <div className="rowTitle">

        <div className="Date">
          <p>{week}</p>
          <p>{month} {day}, {year}</p>
          <p>{hour}:{minute}</p>
        </div>
        
        {
          degree ?
          <img src={switch1} alt="Weather Icon" onClick={changeDegree} width="60px"/>
          :
          <img src={switch2} alt="Weather Icon" onClick={changeDegree} width="60px"/> 
        }
             
      </div>

      <div className="Main">
        
        <img src={iconTemp} alt="Weather Icon" width="200px"/>
        <div className="mainTemp">
          {
            degree ?
            <h1>{tempCelsius}°C</h1>
            :
            <h1>{tempFahrenheit}°F</h1>
          }   
        </div>       
        <h1>{weather?.name}, {weather?.sys.country}</h1>
        <h2>{weather?.weather[0].description}</h2>
      </div>

      <div className="featuresContainer">

        <div className="Feature">
          <div className="infoFeature">
            <p>Wind Speed</p>
            <p>{weather?.wind.speed} m/s</p>
          </div>
          <div className="iconFeature">
            <img src={iconWind} alt="Weather Icon" width="75px"/>  
          </div>          
        </div>

        <div className="Feature">
          <div className="infoFeature">
            <p>Clouds</p>
            <p>{weather?.clouds.all}%</p>
          </div>
          <div className="iconFeature">
            <img src={iconCloud} alt="Weather Icon" width="75px"/> 
          </div>          
        </div>

        <div className="Feature">
          <div className="infoFeature">
            <p>Pressure</p>
            <p>{weather?.main.pressure} hPa</p>
          </div>
          <div className="iconFeature">
            <img src={iconPressure} alt="Weather Icon" width="75px"/> 
          </div>          
        </div>

        <div className="Feature">
          <div className="infoFeature">
            <p>Humidity</p>
            <p>{weather?.main.humidity}%</p>
          </div>
          <div className="iconFeature">
            <img src={iconHumidity} alt="Weather Icon" width="75px"/> 
          </div>          
        </div>
      </div>

    </div>
  )
}

export default Table