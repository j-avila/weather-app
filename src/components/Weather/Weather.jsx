import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Icons from '../Icons';

const Weather = ({ temp, state }) => {
  return (
    <Grid
      container
      item
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      spacing={1}
    >
      <Icons weather={state} />
      <Typography display='inline' variant='h2'>
        {temp}
      </Typography>
    </Grid>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

export default Weather;
