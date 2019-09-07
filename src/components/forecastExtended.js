import React, {useState, useEffect} from 'react'
import {apiForecastURL, api_key} from './../constants/api_url'
import ForecastItem from './forecastItem'
import {transformForecast} from './../services/transformForecast'
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
    let forecastData
    const url = `${apiForecastURL}?q=${city}&appid=${api_key}`
    fetch(url).then(
      data => (data.json())
      .then(
        weather_data => {
          weather_data.cod === "404" ? console.log(weather_data) : 
          forecastData = transformForecast(weather_data)
          setData(forecastData) 
        }
      )
    )
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