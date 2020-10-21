import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import Grid from '@material-ui/core/Grid'
import { MdPermScanWifi } from 'react-icons/md'
import { List, ListItem, Typography } from '@material-ui/core'
import Axios from 'axios'
import convertUnits from 'convert-units'
const RenderCityAndCoutry = ({ cityCountry, weather, locationHandler }) => {
  const { city, country } = cityCountry

  return (
    <ListItem button onClick={locationHandler}>
      <Grid container justify='center'>
        <Grid item md={10} xs={10}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={2} xs={2}>
          {weather ? (
            <Weather temp={weather.temperature} state={weather.state} />
          ) : (
            <Typography role='body2'>sin datos</Typography>
          )}
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({ cities, action }) => {
  const [allWeather, setAllWeather] = useState({})
  const apiWeather = process.env.REACT_APP_API_WEATHER_URL
  const apiKey = process.env.REACT_APP_API_KEY

  const setWeather = (city, country, countryCode) => {
    let url = `${apiWeather}?q=${city},${countryCode}&appid=${apiKey}`

    Axios.get(url)
      .then((resp) => {
        const { data } = resp
        const temperature = Number(
          convertUnits(data.main.temp).from('K').to('C').toFixed(0)
        )
        const state = data.weather[0].main.toLowerCase()
        const propName = `${city}-${country}`
        const propValue = { temperature, state }
        setAllWeather((allWeather) => ({ ...allWeather, [propName]: propValue }))
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    cities.map((data) => setWeather(data.city, data.country, data.countryCode))
  }, [cities])

  return (
    <List>
      {cities && cities.length >= 1 ? (
        cities.map((location, index) => (
          <RenderCityAndCoutry
            cityCountry={location}
            weather={allWeather[`${location.city}-${location.country}`]}
            locationHandler={action}
            key={index}
          />
        ))
      ) : (
        <Grid container direction='column' alignItems='center' alignContent='center'>
          <MdPermScanWifi size='6rem' />
          <h1>Revisa tu conexión a intenret</h1>
        </Grid>
      )}
    </List>
  )
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  action: PropTypes.func.isRequired,
}
export default CityList
