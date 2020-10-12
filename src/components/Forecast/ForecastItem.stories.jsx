import React from 'react'
import Forecast from './Forecast'

export default {
  title: 'Forecast list',
  component: Forecast,
}

const list = [
  {
    weekDay: 'lunes',
    temp: 10,
    state: 'sunny',
    hour: '10:00 am',
  },
  {
    weekDay: 'martes',
    temp: 8,
    state: 'cloud',
    hour: '8:00 pm,',
  },
  {
    weekDay: 'miercoles',
    temp: 8,
    state: 'sunny',
    hour: '8:00 pm,',
  },
  {
    weekDay: 'jueves',
    temp: 16,
    state: 'fog',
    hour: '8:00 pm,',
  },
  {
    weekDay: 'viernes',
    temp: 16,
    state: 'fog',
    hour: '8:00 pm,',
  },
  {
    weekDay: 'sabado',
    temp: 10,
    state: 'rain',
    hour: '8:00 pm,',
  },
  {
    weekDay: 'domingo',
    temp: 8,
    state: 'rain',
    hour: '8:00 pm,',
  },
]

export const CityListExample = () => <Forecast forecastItemList={list} />
export const CityListEmpty = () => <Forecast />
