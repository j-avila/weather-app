import React from 'react'
import CityList from '../components/CityList'
import { useHistory } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import { Paper } from '@material-ui/core'

const list = [
  { city: 'Caracas', country: 'Venezuela', countryCode: 'VE', temp: 10, state: 'sunny' },
  { city: 'Santiago', country: 'Chile', countryCode: 'CL', temp: 10, state: 'cloudy' },
  {
    city: 'Amsterdam',
    country: 'Paises bajos',
    countryCode: 'NL',
    temp: 10,
    state: 'sunny',
  },
]

export const MainPage = () => {
  const history = useHistory()
  const onClickHandler = () => {
    history.push('/city')
  }

  return (
    <AppFrame>
      <Paper elevation={2}>
        <CityList cities={list} action={onClickHandler} />
      </Paper>
    </AppFrame>
  )
}
