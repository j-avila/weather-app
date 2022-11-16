import React from 'react';
import PropTypes from 'prop-types';
import {
  WiCloud,
  WiDaySunny,
  WiRain,
  WiHorizonAlt,
  WiSnow,
  WiDayRainMix,
  WiThunderstorm,
  WiDayHaze,
  WiNa
} from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
  clouds: WiCloud,
  cloud: WiCloud,
  drizzle: WiDayRainMix,
  clear: WiDaySunny,
  sunny: WiDaySunny,
  rain: WiRain,
  fog: WiRain,
  mist: WiRain,
  haze: WiDayHaze,
  snow: WiSnow,
  thunderstorm: WiThunderstorm,
  default: WiHorizonAlt,
  notAviable: WiNa
};
const RenderState = (state) => {
  const Icon = stateByName[state] || stateByName['notAviable'];
  return <Icon />;
};

// ThunderStorm, Drizzle, Rain, Snow, Clear, Clouds

export const validValues = [
  'clouds',
  'snow',
  'clear',
  'rain',
  'mist',
  'haze',
  'drizzle',
  'thunderstrom',
  'default',
  'notAviable'
];

const Icons = ({ weather }) => {

  return (
    <i className={`ico-${weather}`} data-testid={`ico-${weather}`}>
      <IconContext.Provider value={{ size: '5em', display: 'inline' }}>
        {RenderState(weather?.toLowerCase())}
      </IconContext.Provider>
    </i>
  );
};

Icons.propTypes = {
  state: PropTypes.oneOf(validValues),
};

export default Icons;
