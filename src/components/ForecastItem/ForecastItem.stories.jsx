import React from 'react'
import ForecastItem from './ForecastItem'

export default {
  title: 'Forecast Item Example',
  component: ForecastItem,
}

export const forecastItemExample = () => (
  <ForecastItem weekDay='lunes' hour={18} state='sunny' temp={10} />
)
