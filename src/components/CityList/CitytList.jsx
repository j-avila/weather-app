import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import Grid from '@material-ui/core/Grid'
import { List, ListItem } from '@material-ui/core'

const RenderCityAndCoutry = ({ cityCountry, locationHandler }) => {
  const { city, country, state } = cityCountry

  return (
    <ListItem button onClick={locationHandler}>
      <Grid container justify='center' alignItems='center'>
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Weather temp={10} state={state} />
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({ cities, action }) => {
  return (
    <List>
      {cities.map((location, index) => (
        <RenderCityAndCoutry
          cityCountry={location}
          locationHandler={action}
          key={index}
        />
      ))}
    </List>
  )
}

CityList.propTypes = {
  cities: PropTypes.array,
  action: PropTypes.func.isRequired,
}
export default CityList
