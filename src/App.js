import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css'
import { Toolbar } from '@material-ui/core'
import LocationListContainer from './containers/locationListContainer';
import ForecastExtendedContainer from './containers/forecastExtendedContainer';

const cities = [
  "Caracas, vzla",
  "Bolivar, vzla",
  "Santiago, cl",
  "Amsterdam, nl",
  "California, us",
  "Maracaibo, vzla",
]


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      city: null
    }
  }

  render(){

    return(
      <div className="App">
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="subtitle1" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row between="xs">
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}/>
            </Col>
            <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer />
              </div>
            </Paper>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default App
