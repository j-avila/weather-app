import React from 'react';
import PropTypes from 'prop-types';
import { WiNa } from 'react-icons/wi';
import { Grid } from '@material-ui/core';
import ForecastItem from '../ForecastItem';

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
    <Grid container direction='row' justifyContent='space-around' alignItems='center' style={{ padding: ' .5rem 1rem', gap: '52px', minWidth: 'max-content' }} >
      {forecastItemList && forecastItemList.length >= 1 ? (
        forecastItemList.map((item, index) => (
          <RenderForecastItem key={index} forecast={item} />
        ))
      ) : (
        <WiNa />
      )}
    </Grid>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.object,
};

export default Forecast;
