import React from 'react'
import CityList from './CitytList'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Cities List',
  component: CityList,
}

const list = [
  { city: 'Caracas', country: 'Venezuela' },
  { city: 'Santiago', country: 'Chile' },
  { city: 'Amsterdam', country: 'Paises bajos' },
]

export const CityListExample = () => (
  <CityList cities={list} action={action('clicked!')} />
)
