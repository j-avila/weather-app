import React, { Component } from 'react'
import LocationList from '../components/LocationList'
import { connect } from 'react-redux'
import { setSelectedCity, setWeather } from '../actions/'
import { getWeatherCities, getCity } from '../reducers'

export class LocationListContainer extends Component {
  
  componentDidMount() {
    const {setWeather, setCity, cities, city} = this.props
    setWeather(cities)
    setCity(city)
  }
  
  handleSlection = city => {
    this.props.setCity(city)
  }
  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSlection}
      />
    )
  }
}

const mapStateToProps = state => ({
  city: getCity(state),
  citiesWeather: getWeatherCities(state)
})

const mapDispatchToProps = dispatch =>({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)