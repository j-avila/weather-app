import React from 'react'
import CityList from './CitytList'
import { action } from '@storybook/addon-actions'

export default {
	title: 'Cities List',
	component: CityList,
}

const list = [
	{ city: 'Caracas', country: 'Venezuela', temp: 10, state: 'sunny' },
	{ city: 'Santiago', country: 'Chile', temp: 10, state: 'cloudy' },
	{ city: 'Amsterdam', country: 'Paises bajos', temp: 10, state: 'sunny' },
]

export const CityListExample = () => (
	<CityList cities={list} action={action('clicked!')} />
)
