import React from 'react';
import PropTypes from 'prop-types';
import { Link as route } from 'react-router-dom';
import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from '@material-ui/core';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';

const AppFrame = ({ children }) => {
  return (
    <div>
      <Grid container justifyContent='center'>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' arria-label='menu'>
              <Link to='/main' aria-label='menu' color='inherit' component={route}>
                <IconContext.Provider value={{ size: '2em' }}>
                  <WiDaySunny />
                </IconContext.Provider>
              </Link>
            </IconButton>
            <Typography variant='h6'>Weather app</Typography>
          </Toolbar>
        </AppBar>
        <Grid item xs={12} sm={11} md={12} lg={10}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
