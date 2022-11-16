import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function WeatherDetails({ humidity, wind }) {
	return (
		<>
			<Typography variant='body1'>Humedad: {humidity}%</Typography>
			<Typography variant='body1'>Viento: {wind}kph</Typography>
		</>
	);
}

WeatherDetails.propTypes = {
	humidity: PropTypes.number,
	wind: PropTypes.number,
};

export default WeatherDetails;
