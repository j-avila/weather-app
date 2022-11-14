import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import AppFrame from '../components/AppFrame';
import CityInfo from '../components/CityInfo';
import Forecast from '../components/Forecast';
import WheatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/Charts';
import Weather from '../components/Weather';
import { useEffect } from 'react';
import setWeather from '../utils/setWeather';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import format from 'dayjs/plugin/advancedFormat';
import convertUnits from 'convert-units';

const weatherInfoDummy = {
  country: 'venezuela',
  city: 'caracas',
  today: {
    weekDay: 'lunes',
    hour: 18,
    state: 'sunny',
    temp: 10,
    humidity: 8,
    wind: 100,
  },
  week: [
    {
      weekDay: 'lunes',
      hour: 18,
      state: 'rain',
      temp: 10,
    },
    {
      weekDay: 'martes',
      hour: 13,
      state: 'sunny',
      temp: 29,
    },
    {
      weekDay: 'miercoles',
      hour: 20,
      state: 'cloud',
      temp: 2,
    },
    {
      weekDay: 'jueves',
      hour: 17,
      state: 'sunny',
      temp: 18,
    },
    {
      weekDay: 'viernes',
      hour: 12,
      state: 'rain',
      temp: 12,
    },
    {
      weekDay: 'sabado',
      hour: 13,
      state: 'rain',
      temp: 30,
    },
    {
      weekDay: 'domingo',
      hour: 20,
      state: 'fog',
      temp: 2,
    },
  ],
  forecastWeek: [
    {
      dayHour: 'jue 18',
      min: 14,
      max: 22,
    },
    {
      dayHour: 'vie 06',
      min: 0,
      max: 24,
    },
    {
      dayHour: 'vie 12',
      min: 34,
      max: 14,
    },
    {
      dayHour: 'vie 4',
      min: 45,
      max: 19,
    },
    {
      dayHour: 'sab 13 4',
      min: 23,
      max: 15,
    },
  ],
};
dayjs.extend(format);
dayjs.extend(dayOfYear);



export const CityPage = ({ location }) => {
  const { state } = location;
  const { country, city, today, week, forecastWeek: dummyFW } = weatherInfoDummy;
  const [localWeather, setLocalWeather] = useState();
  const [forecastWeek, setforecastWeek] = useState([]);
  const toCelcius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed());


  const parseData = (forecastData) => {
    const daysAhead = [0, 1, 2, 3, 4, 5];
    const days = daysAhead.map(d => dayjs().add(d, 'd'));
    const daysAux = days.map(day => {
      const tempObjArray = forecastData.list.filter(item => {
        const dayofyear = dayjs.unix(item.dt).dayOfYear();
        return dayofyear === day.dayOfYear();
      });
      const temps = tempObjArray.map(item => item.main.temp);

      return ({
        dayHour: day.format('ddd'),
        min: toCelcius(Math.min(...temps)),
        max: toCelcius(Math.max(...temps))
      });
    });

    const interval = [4, 8, 16, 20, 24];
    const forecastItemsAux = forecastData.list
      .filter((item, index) => interval.includes(index))
      .map(item => ({
        hour: dayjs.unix(item.dt).hour(),
        weekDay: dayjs.unix(item.dt).format('dddd'),
        temp: toCelcius(item.main.temp)
      }));

    const today = forecastData.list[0];

    setforecastWeek({ chartWeek: daysAux, week: forecastItemsAux, today });

  };

  useEffect(() => {
    setWeather({ city: state.city, country: state.country, countryCode: state.countryCode }, setLocalWeather, 'forecast');
  }, []);

  useEffect(() => {
    if (localWeather) {
      parseData(localWeather);
    }
  }, [localWeather]);

  return (
    <AppFrame>
      <Grid container direction='column' justify='center' spacing={1}>
        <Grid container columns={{ md: 12 }} justify='center'>
          <CityInfo country={state.country} city={state.city} />
        </Grid>
        <Grid
          container
          direction='row'
          columns={{ xs: 12 }}
          justify='center'
          spacing={2}
          alignItems='center'
        >
          <Grid item md={8}>
            <Weather
              weekDay={today.weekDay}
              hour={today.hour}
              state={today.state}
              temp={toCelcius(forecastWeek?.today?.main?.temp)}
            />
          </Grid>
          <Grid item md={4}>
            <WheatherDetails humidity={forecastWeek?.today?.main.humidity} wind={forecastWeek?.today?.wind.speed} />
          </Grid>
        </Grid>
        <Grid item>
          <ForecastChart data={forecastWeek.chartWeek || {}} />
        </Grid>
        <Grid item md={12}>
          <Forecast forecastItemList={forecastWeek.week || {}} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};
