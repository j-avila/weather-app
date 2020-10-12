import React from 'react'
import PropTypes from 'prop-types'
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
  WiHorizonAlt,
} from 'react-icons/wi'
import { IconContext } from 'react-icons'

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
  default: WiHorizonAlt,
}
const renderState = (state) => {
  const Icon = state ? stateByName[state] : stateByName['default']
  return <Icon />
}
export const validValues = ['cloud', 'cloudy', 'fog', 'sunny', 'rain', 'default']

const Icons = ({ weather }) => {
  return (
    <i className={`ico-${weather}`} data-testid={`ico-${weather}`}>
      <IconContext.Provider value={{ size: '5em', display: 'inline' }}>
        {renderState(weather)}
      </IconContext.Provider>
    </i>
  )
}

Icons.propTypes = {
  sate: PropTypes.oneOf(validValues),
  state: PropTypes.string,
}

export default Icons
