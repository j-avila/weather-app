import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { Link as Route } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { GoSquirrel } from 'react-icons/go';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

export const NotFound = () => {
  return (
    <WelcomeScreen>
      <Grid container className='full' direction='column' justifyContent='center'>
        <div className='hightlight'>
          <Grid item container xs={12} spacing={4} justifyContent='center' alignItems='center'>
            <Grid item>
              <IconContext.Provider value={{ size: '6em', color: '#ffffff' }}>
                <GoSquirrel />
              </IconContext.Provider>
            </Grid>
            <Grid item>
              <Typography variant='h4' style={{ fontWeight: 'bold', color: 'white' }}>
                404
              </Typography>
              <Typography variant='h4' style={{ color: 'white' }}>
                pagina no encontrada
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent='center'>
            <Link className='link-button' arial-label='menu' component={Route} to='/'>
              Volver al Inicio
            </Link>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default NotFound;
