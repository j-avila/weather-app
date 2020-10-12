import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid } from '@material-ui/core'
import Icons from '../Icons/Icons'

const ForecastItem = ({ weekDay, hour, state, temp }) => {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <Icons weather={state} />
      </Grid>
      <Grid item>
        <Typography>{temp}°</Typography>
      </Grid>
    </Grid>
  )
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  temprature: PropTypes.number.isRequired,
}

export default ForecastItem
