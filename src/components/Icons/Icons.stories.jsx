import React from 'react'
import 'typeface-roboto'
import Icons from './Icons'

export default {
  title: 'Icons',
  component: Icons,
}

export const WeatherCloudIcon = () => <Icons weather='clouds' />
export const WeatherSunnyIcon = () => <Icons weather='clear' />
