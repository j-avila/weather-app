import React, {useState} from 'react';
import  Paper from '@material-ui/core/Paper'
import  AppBar from '@material-ui/core/AppBar'
import  Typography from '@material-ui/core/Typography'
import LocationList from './components/LocationList';
import ForecastExtended from './components/forecastExtended'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css';
import { Toolbar } from '@material-ui/core';


const cities = [
  "Caracas, vzla",
  "Bolivar, vzla",
  "Santiago, cl",
  "Amsterdam, nl",
  "California, us",
  "Maracaibo, vzla",
]

function App() {

  const  [city, setCity] = useState("selecciona")

  const  handleSlection = city => {
    // console.log("grand parent handle", city)
    setCity(city)
  }

  return (
    <div className="App">
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row between="xs">
          <Col xs={12} md={6}>
          <LocationList
              cities={cities}
              onSelectedLocation={handleSlection}
            />
          </Col>
          <Col xs={12} md={6}>
           <Paper elevation="4">
            <div className="details">
              <ForecastExtended city={city}/>
            </div>
           </Paper>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
