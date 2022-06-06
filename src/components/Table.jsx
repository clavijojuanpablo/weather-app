import React, { useEffect, useState } from 'react'
import switch1 from "../assets/degreeC.png"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Table = ({weather}) => {

  console.log(switch1)

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
  const imageIcon = `src/assets/icons/${aux}.png`;  
  const tempCelsius = Math.round((weather?.main.temp - 273.15)*10) / 10;
  const tempFahrenheit = Math.round((tempCelsius * (9/5)) + 32 * 10) / 10

  const [degree, setDegree] = useState(true)
  const changeDegree = () => {setDegree(!degree)}

  // Change Background
  const [background, setBackground] = useState("")
   
  const changeBG = () => {
    if(aux==1){
      setBackground("src/assets/videos/clear.mp4")
    }else if(aux == 2){
      setBackground("src/assets/videos/clouds.mp4")
    }else if(aux>2 && aux<5){
      setBackground('src/assets/videos/broken.mp4')
    }else if(aux>8 && aux<11){
      setBackground("src/assets/videos/rain.mp4")
    }else if(aux === 11){
      setBackground("src/assets/videos/storm.mp4")
    }else if(aux === 13){
      setBackground("src/assets/videos/snow.mp4")
    }else if(aux === 11){
      setBackground("src/assets/videos/mist.mp4")
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
          <img src="src/assets/degreeF.png" alt="Weather Icon" onClick={changeDegree} width="60px"/> 
        }
             
      </div>

      <div className="Main">
        <img src={imageIcon} alt="Weather Icon" width="200px"/>
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
            <img src="src/assets/statWind.png" alt="Weather Icon" width="75px"/>  
          </div>          
        </div>

        <div className="Feature">
          <div className="infoFeature">
            <p>Clouds</p>
            <p>{weather?.clouds.all}%</p>
          </div>
          <div className="iconFeature">
            <img src="src/assets/statCloud.png" alt="Weather Icon" width="75px"/> 
          </div>          
        </div>

        <div className="Feature">
          <div className="infoFeature">
            <p>Pressure</p>
            <p>{weather?.main.pressure} hPa</p>
          </div>
          <div className="iconFeature">
            <img src="src/assets/statPressure.png" alt="Weather Icon" width="75px"/> 
          </div>          
        </div>

        <div className="Feature">
          <div className="infoFeature">
            <p>Humidity</p>
            <p>{weather?.main.humidity}%</p>
          </div>
          <div className="iconFeature">
            <img src="src/assets/statHumidity.png" alt="Weather Icon" width="75px"/> 
          </div>          
        </div>
      </div>

    </div>
  )
}

export default Table