import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './weatherData'
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'

class WeatherLocation extends Component {
  constructor(props) {
    super(props)
    const { city } = props
    this.state = {
      city,
      data: null
    }
  }

  handleUpdate = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)
    fetch(api_weather).then( resolve => {
      return resolve.json()
    }).then( data => {
      const newWeather = transformWeather(data)
      this.setState({
        data: newWeather
      })

    })
  }

  componentDidMount() {
    this.handleUpdate()
    console.log("mount")
  }
  
  componentWillMount(nextProps, nextState) {
    // console.log("will mount")
  }
  
  componentWillUpdate(){
    // console.log("will update")
  }
  
  render(){
    const { clickedLocation } = this.props
    const { city, data } = this.state
    return(
      <div className="city-holder" onClick={clickedLocation}>
        <Location city={city} />
        {
          data ? <WeatherData data={data} />
          : <CircularProgress />
        }
      </div>
    )
  }
 
}

export default WeatherLocation;