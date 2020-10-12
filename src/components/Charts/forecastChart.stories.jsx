import React from 'react'
import ForecastChart from './ForecastChart'

export default {
  title: 'forecast chart graphics',
  component: ForecastChart,
}

const items = [
  {
    dayHour: 'jue 18',
    min: 14,
    max: 22,
  },
  {
    dayHour: 'vie 06',
    min: 0,
    max: 24,
  },
  {
    dayHour: 'vie 12',
    min: 34,
    max: 14,
  },
  {
    dayHour: 'vie 4',
    min: 45,
    max: 19,
  },
  {
    dayHour: 'sab 13 4',
    min: 23,
    max: 15,
  },
]

export const ChartExample = () => <ForecastChart data={items} />
