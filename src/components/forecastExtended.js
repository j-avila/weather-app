import React, {useState, useEffect} from 'react'
import ForecastItem from './forecastItem'
import './styles.css'

let ForecastItemsDays = props =>(
  props.data.map((forecast, index) =>  (
    <ForecastItem 
      key={forecast.weekDay + index}
      weekday={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ))
    
)

const RenderProgress = () => {
  return <h3>cargando...</h3>
}

const ForecastExtended = props =>{
  let [extData, setData] = useState(null)
  const {city} = props
  
  useEffect(() => {
    // let forecastData
  },[city]) 
  
  return(
    <div className="forecastExtended">
      <h1>Pronostico extendido de {city}</h1>
      {extData ? 
        <ForecastItemsDays data={extData} />
        : <RenderProgress />
      }
    </div>
  )
}
  
export default ForecastExtended