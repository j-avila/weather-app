import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test('WeatherDetails render', async () => {
	// arrange
	const { getByText } = render(<WeatherDetails humidity={10} wind={8} />)

	// act
	const humidityExample = getByText('Humedad: 10%')
	const windExample = getByText('Viento: 8kph')

	// assert
	expect(humidityExample).toHaveTextContent('Humedad: 10%')
	expect(windExample).toHaveTextContent('Viento: 8kph')
})
