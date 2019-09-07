import React, { Component } from 'react'
import LocationList from '../components/LocationList'
import { connect } from 'react-redux'
import { setCity } from '../actions/'

export class LocationListContainer extends Component {

handleSlection = city => {
  console.log("grand parent handle", city)
  // this.setState({city: city})
  
  this.props.setCity(city)
}
render() {
    const {cities} = this.props
    return (
      <LocationList
        cities={cities}
        onSelectedLocation={this.handleSlection}
      />
    )
  }
}


const mapDispatchToProps = dispatch =>({
  setCity: value => dispatch(setCity(value))
})

export default connect(null, mapDispatchToProps)(LocationListContainer)