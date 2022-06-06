import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from './components/Table'
import './App.css'
import Loading from './components/Loading'


function App() {

  const [obj, setObj] = useState()
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const success = pos => {
      const lat = (pos.coords.latitude)
      const lon = (pos.coords.longitude)   
      setObj({lat, lon})   
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(obj != undefined){
      const API_KEY = '3034182a739bf3a889196dbc89db16ab'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.lon}&appid=${API_KEY}`
      axios.get(url)
        .then(res =>{
          setWeather(res.data)
          setLoading(false)
        })
        .catch(err => console.log(err))
    }    
  }, [obj])
                
  console.log(weather)
  return (
    <div className="App">   
      {
        loading ?
        <Loading/>
        :
        <Table weather={weather}/>

      }   
      
    </div>
  )
}
export default App
