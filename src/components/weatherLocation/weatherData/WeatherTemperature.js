import React from "react";
import WeatherIcons from "react-weathericons";
// import PropTypes from 'prop-types'
// import * as consts from '../../../constants/weathers'

/* const icons = {
  ...consts
} */

const getWeatherIcon = weatherState => {
  // const icon = icons[weatherState]
  const icon = weatherState
  let iconSize = "4x"
  return (
      icon ? <WeatherIcons  name={icon} size={iconSize} />
      : <WeatherIcons  name="day-sunny" size={iconSize} />

  )
}

const WeatherTemperature = ({temperature, weatherState}) => {
  // console.log(weatherState)
  return(
    <div className="temperature">
      {getWeatherIcon(weatherState)}
      <span className="temp">{ `${temperature}` }</span>
      <span className="tempType">{ `C°` }</span>
    </div>
  )
};

// WeatherTemperature.propTypes = {
//   temperature: PropTypes.number,
//   weatherState: PropTypes.string

// }

export default WeatherTemperature;