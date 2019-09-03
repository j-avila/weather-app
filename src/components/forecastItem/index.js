import React from 'react'
import WeatherData from './../weatherLocation/weatherData';

const ForecastItem = ({ weekday, hour, data }) => {
  return(
    <div>
      <h5>{ weekday }  - hora:{hour}hs</h5>
      {data &&
        <WeatherData data={data} />
      }
    </div>
  )
}

export default ForecastItem