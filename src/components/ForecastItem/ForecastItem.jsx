import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaTemperatureLow } from 'react-icons/fa';
import Icons from '../Icons/Icons';

const ForecastItem = ({ weekDay, hour, state, temp }) => {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center'>
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid container justifyContent='space-between' alignItems='center' >
        <>
          <AiOutlineClockCircle /> Hora:
        </>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <Icons weather={state} />
      </Grid>
      <Grid container alignItems='center'>
        <>
          <FaTemperatureLow /> Temp:
        </>
        <Typography> {temp}°</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default ForecastItem;
