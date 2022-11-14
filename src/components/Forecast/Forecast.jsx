import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ForecastItem from '../ForecastItem';
import { validValues } from '../Icons/Icons';

const RenderForecastItem = ({ forecast }) => {
  const { weekDay, hour, state, temp } = forecast;

  return (
    <Grid item data-testid='forecast-item'>
      <ForecastItem weekDay={weekDay} hour={hour} state={state} temp={temp} />
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container direction='row' justify='space-around' alignItems='center'>
      {forecastItemList && forecastItemList.length >= 1 ? (
        forecastItemList.map((item, index) => (
          <RenderForecastItem key={index} forecast={item} />
        ))
      ) : (
        <h1>nada que ver</h1>
      )}
    </Grid>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.array,
};

export default Forecast;
