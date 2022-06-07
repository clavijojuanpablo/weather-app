import Table from './components/Table'
import './App.css'
import Loading from './components/Loading'
import useWeather from './hooks/useWeather'


function App() {

  const {loading, weather} = useWeather()
 
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
