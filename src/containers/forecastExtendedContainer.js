import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/forecastExtended';
import { connect } from 'react-redux'
import { getForecastDataFromCities, getCity } from '../reducers';

class ForecastExtendedContainer extends Component {
  render() {
    const {city, forecastData} = this.props
    return (
      city &&
      <ForecastExtended city={city} forecastData={forecastData} />
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,

}

const mapStateToProps = state => ({city: getCity(state), forecastData: getForecastDataFromCities(state)})

export default connect(mapStateToProps, null)(ForecastExtendedContainer);