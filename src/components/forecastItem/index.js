import React from 'react'
import WeatherData from './../weatherLocation/weatherData';

const ForecastItem = ({ weekday, hour, data }) => {
  return(
    <div>
      <div>{ weekday } hour={hour}</div>
      {data &&
        <WeatherData data={data} />
      }
    </div>
  )
}

export default ForecastItem