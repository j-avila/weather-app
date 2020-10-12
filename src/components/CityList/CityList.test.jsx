import React from 'react'
import CityList from './CitytList'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const list = [
  { city: 'Caracas', country: 'Venezuela', temp: 10, state: 'sunny' },
  { city: 'Santiago', country: 'Chile', temp: 10, state: 'cloudy' },
  { city: 'Amsterdam', country: 'Paises bajos', temp: 10, state: 'sunny' },
]

test('CityList render', async () => {
  // arrange
  const { findAllByRole } = render(<CityList cities={list} />)
  // act
  const cityListComponent = await findAllByRole('button')
  // assert
  expect(cityListComponent[0]).toHaveTextContent('Caracas')
  expect(cityListComponent).toHaveLength(3)
})

test('CityList click on item', async () => {
  // arrange
  const clickEvent = jest.fn()
  const { findAllByRole } = render(<CityList cities={list} action={clickEvent} />)
  const items = await findAllByRole('button')

  // act
  fireEvent.click(items[0])

  // assert
  expect(clickEvent).toHaveBeenCalledTimes(1)
})
