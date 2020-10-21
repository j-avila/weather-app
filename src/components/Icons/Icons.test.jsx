import React from 'react'
import { render, screen } from '@testing-library/react'
import Icons from './Icons'

test('ForecastItem', async () => {
  // arrange
  render(<Icons weather='clear' />)

  // act
  const element = screen.getByTestId('ico-clear')

  // assert
  expect(element).toMatchSnapshot()
})
