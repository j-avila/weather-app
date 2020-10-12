import React from 'react'
import { render, screen } from '@testing-library/react'
import Icons from './Icons'

test('ForecastItem', async () => {
	// arrange
	render(<Icons weather='sunny' />)

	// act
	const element = screen.getByTestId('ico-sunny')

	// assert
	expect(element).toMatchSnapshot()
})
