import React from 'react'
import { findAllByText, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Forecast from './Forecast'

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

test('should render', async () => {
  // arrange
  const { findAllByTestId } = render(<Forecast forecastItemList={list} />)

  // act
  const forecastList = await findAllByTestId('forecast-item')

  // assert
  expect(forecastList).toHaveLength(7)
})

test('should render empty', async () => {
  // arrange
  const { findAllByText } = render(<Forecast />)

  // act
  const forecastList = await findAllByText('nada que ver')

  // assert
  expect(forecastList).toHaveLength(1)
})
