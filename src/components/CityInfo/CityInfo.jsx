import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const CityInfo = ({ city, country }) => {
  return (
    <Grid contianer>
      <Typography display='inline' variant='h4'>
        {city}
      </Typography>
      ,
      <Typography display='inline' variant='h6'>
        {country}
      </Typography>
    </Grid>
  )
}

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
}

export default CityInfo