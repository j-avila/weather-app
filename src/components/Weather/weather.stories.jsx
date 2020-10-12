import React from 'react'
import 'typeface-roboto'
import Weather from './Weather'

export default {
	title: 'Weather',
	component: Weather,
}

export const WeatherCloud = () => <Weather temp='10' state='cloudy' />
export const WeatherSunny = () => <Weather temp='10' state='sunny' />
