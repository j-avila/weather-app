import React, { Component } from 'react';
import ForecastExtended from '../components/forecastExtended';
import { connect } from 'react-redux'

class ForecastExtendedContainer extends Component {
  render() {
    const {city, forecastData} = this.props
    return (
      <ForecastExtended city={city} forecastData={forecastData} />
    );
  }
}

const mapStateToProps = ({city, forecastData}) => ({city, forecastData})

export default connect(mapStateToProps, null)(ForecastExtendedContainer);