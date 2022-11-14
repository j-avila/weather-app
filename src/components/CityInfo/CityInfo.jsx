import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const CityInfo = ({ city, country }) => {
  return (
    <Grid item style={{ marginTop: '2rem' }} >
      <Typography variant='h4' align='center'>
        {city}
      </Typography>
      ,
      <Typography variant='h6' align='center'>
        {country}
      </Typography>
    </Grid>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
