import React from 'react'
import PropTypes from 'prop-types'
import {
  WiCloud,
  WiDaySunny,
  WiRain,
  WiHorizonAlt,
  WiSnow,
  WiDayRainMix,
  WiThunderstorm,
} from 'react-icons/wi'
import { IconContext } from 'react-icons'

const stateByName = {
  clouds: WiCloud,
  drizzle: WiDayRainMix,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  thunderstorm: WiThunderstorm,
  default: WiHorizonAlt,
}
const renderState = (state) => {
  const Icon = state ? stateByName[state] : stateByName['default']
  return <Icon />
}

// ThunderStorm, Drizzle, Rain, Snow, Clear, Clouds

export const validValues = [
  'clouds',
  'snow',
  'clear',
  'rain',
  'drizzle',
  'thunderstrom',
  'default',
]

const Icons = ({ weather }) => {
  return (
    <>
      <i className={`ico-${weather}`} data-testid={`ico-${weather}`}>
        <IconContext.Provider value={{ size: '5em', display: 'inline' }}>
          {renderState(weather)}
        </IconContext.Provider>
      </i>
    </>
  )
}

Icons.propTypes = {
  sate: PropTypes.oneOf(validValues),
  state: PropTypes.string,
}

export default Icons
