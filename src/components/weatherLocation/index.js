import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './weatherData'

const WeatherLocation = props => {

  const { clickedLocation, city, data } = props
  return(
    <div className="city-holder" onClick={clickedLocation}>
      <Location city={city} />
      {
        data ? <WeatherData data={data} />
        : <CircularProgress />
      }
    </div>
  )
 
}

export default WeatherLocation;