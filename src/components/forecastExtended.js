import React, {useState, useEffect} from 'react'
import {apiForecastURL, api_key} from './../constants/api_url'
import ForecastItem from './forecastItem'
import {transformForecast} from './../services/transformForecast'
import './styles.css'

/* const fakedays = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
]

const fakedata = 
  {
    temperature: 20,
    humidity: 10,
    weatherState: "rain",
    wind: 30
} */

const ForecastExtended = props =>{
  const [days, setDays] = useState(null)
  const [data, setData] = useState(null)
  const {city} = props

  useEffect(() => {
    const url = `${apiForecastURL}?q=${city}&appid=${api_key}`
    fetch(url).then(
      data => (data.json())
      .then(
        weater_data => {
          let forecast = transformForecast(weater_data)
          setData(forecast)
          console.log(data)
        }
      )
    )
  },[city])

  return(
    <div className="forecastExtended">
      <h1>{city}</h1>
      {data  ?
          <h1>yaaay</h1>
        /* days.map( day => 
          <ForecastItem weekday={day} hour={'10:00pm'} data={data} />
        )  */
        : <h3>cargando...</h3>
      } 
    </div>
  )
}

export default ForecastExtended