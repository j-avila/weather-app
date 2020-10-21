import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const temp = 10
const state = 'clear'

test('Weather render', async () => {
  // arrange
  const { findAllByRole } = render(<Weather temp={temp} state={state} />)

  // act
  const tempComponent = await findAllByRole('heading')

  // assert
  expect(tempComponent[0]).toHaveTextContent(temp)
})
