import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test('CityInfo', async () => {
	// Arrange
	//render:  renderiza el componente y retorna una serie de funciones de utilidad
	const city = 'Caracas'
	const country = 'Venezuela'
	const { findAllByRole } = render(<CityInfo city={city} country={country} />)

	// Act
	//  findByRole: busca todos los componentes que coicidan con el parametro,  en este caso headings como h1,h2...
	// retorna un array con los componentes
	const cityCountryComponents = await findAllByRole('heading')

	// Assert
	expect(cityCountryComponents[0]).toHaveTextContent(city)
	expect(cityCountryComponents[1]).toHaveTextContent(country)
})
