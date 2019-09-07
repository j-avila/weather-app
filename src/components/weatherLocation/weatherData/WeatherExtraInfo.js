import React from 'react'
// import PropTypes from 'prop-types'

const WeatherExraInfo = ({humidity, wind}) => (
  <div className="extraInfo">
    <span>{`humedad: ${humidity}%`}</span>
    <span>{`viento: ${wind}mph`}</span>
  </div>
)

// WeatherExraInfo.propTypes = {
//   humidity: PropTypes.number.isRequired,
//   wind: PropTypes.number.isRequired,
// }

export default WeatherExraInfo;