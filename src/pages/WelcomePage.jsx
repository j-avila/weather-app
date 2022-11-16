import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { Link as Route } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { WiDayRainWind } from 'react-icons/wi';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

export const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid container className='full' direction='column' justifyContent='center'>
        <div className='hightlight'>
          <Grid item container xs={12} justifyContent='center' alignItems='center'>
            <Grid item>
              <IconContext.Provider value={{ size: '6em', color: '#ffffff' }}>
                <WiDayRainWind />
              </IconContext.Provider>
            </Grid>
            <Grid item>
              <Typography variant='h4' style={{ color: 'white' }}>
                Weather App
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent='center'>
            <Link className='link-button' arial-label='menu' component={Route} to={`${process.env.REACT_APP_BASEURL}/main`}>
              Entrar
            </Link>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
