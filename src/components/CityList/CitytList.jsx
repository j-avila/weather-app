import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import Grid from '@material-ui/core/Grid';
import { MdPermScanWifi } from 'react-icons/md';
import { List, ListItem, Typography } from '@material-ui/core';
import setWeather from '../../utils/setWeather';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const RenderCityAndCoutry = ({ cityCountry, weather, locationHandler }) => {
  const { city, country, countryCode } = cityCountry;

  return (
    <ListItem button onClick={() => locationHandler(city, country, countryCode)}>
      <Grid container justifyContent='center'>
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
  );
};

const CityList = ({ cities }) => {
  const [allWeather, setAllWeather] = useState({});
  const history = useHistory();
  const onClickHandler = (location) => {
    const { city, country, countryCode } = location;
    history.push({ pathname: '/city', state: { city, country, countryCode } });
  };

  useEffect(() => {
    cities.map((data) => setWeather({ city: data.city, country: data.country, countrycode: data.countryCode }, setAllWeather));
  }, [cities]);

  return (
    <List>
      {cities && cities.length >= 1 ? (
        cities.map((location, index) => (
          <RenderCityAndCoutry
            cityCountry={location}
            weather={allWeather[`${location.city}-${location.country}`]}
            locationHandler={() => onClickHandler(location)}
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
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  action: PropTypes.func.isRequired,
};
export default CityList;
