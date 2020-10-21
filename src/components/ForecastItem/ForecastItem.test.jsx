import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem', async () => {
  // arrange
  const { getByText } = render(
    <ForecastItem weekDay='jueves' hour={18} state='clear' temp={20} />
  )

  // act
  const day = getByText('jueves')
  const hour = getByText('18')
  const temp = getByText('20°')

  // assert
  expect(day).toHaveTextContent('jueves')
  expect(hour).toHaveTextContent('18')
  expect(temp).toHaveTextContent('20°')
})
