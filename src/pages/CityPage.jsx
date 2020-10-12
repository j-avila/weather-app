import { Grid } from '@material-ui/core'
import React from 'react'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import Forecast from '../components/Forecast'
import WheatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/Charts'
import Weather from '../components/Weather'

const weatherInfo = {
  country: 'venezuela',
  city: 'caracas',
  today: {
    weekDay: 'lunes',
    hour: 18,
    state: 'sunny',
    temp: 10,
    humidity: 8,
    wind: 100,
  },
  week: [
    {
      weekDay: 'lunes',
      hour: 18,
      state: 'rain',
      temp: 10,
    },
    {
      weekDay: 'martes',
      hour: 13,
      state: 'sunny',
      temp: 29,
    },
    {
      weekDay: 'miercoles',
      hour: 20,
      state: 'cloud',
      temp: 2,
    },
    {
      weekDay: 'jueves',
      hour: 17,
      state: 'sunny',
      temp: 18,
    },
    {
      weekDay: 'viernes',
      hour: 12,
      state: 'rain',
      temp: 12,
    },
    {
      weekDay: 'sabado',
      hour: 13,
      state: 'rain',
      temp: 30,
    },
    {
      weekDay: 'domingo',
      hour: 20,
      state: 'fog',
      temp: 2,
    },
  ],
  forecastWeek: [
    {
      dayHour: 'jue 18',
      min: 14,
      max: 22,
    },
    {
      dayHour: 'vie 06',
      min: 0,
      max: 24,
    },
    {
      dayHour: 'vie 12',
      min: 34,
      max: 14,
    },
    {
      dayHour: 'vie 4',
      min: 45,
      max: 19,
    },
    {
      dayHour: 'sab 13 4',
      min: 23,
      max: 15,
    },
  ],
}

export const CityPage = () => {
  const { country, city, today, week, forecastWeek } = weatherInfo

  return (
    <AppFrame>
      <Grid container direction='column' justify='center'>
        <Grid container md={12} justify='center'>
          <CityInfo country={country} city={city} />
        </Grid>
        <Grid
          container
          direction='row'
          xs={12}
          justify='center'
          spacing={2}
          alignItems='center'
        >
          <Grid item md={8}>
            <Weather
              weekDay={today.weekDay}
              hour={today.hour}
              state={today.state}
              temp={today.temp}
            />
          </Grid>
          <Grid item md={4}>
            <WheatherDetails humidity={today.humidity} wind={today.wind} />
          </Grid>
        </Grid>
        <Grid item>
          <ForecastChart data={forecastWeek} />
        </Grid>
        <Grid item md={12}>
          <Forecast forecastItemList={week} />
        </Grid>
      </Grid>
    </AppFrame>
  )
}
