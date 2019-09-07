import React, { Component } from 'react';
import ForecastExtended from '../components/forecastExtended';
import { connect } from 'react-redux'

class ForecastExtendedContainer extends Component {
  render() {
    return (
      <ForecastExtended city={this.props.city} />
    );
  }
}

const mapStateToprops = ({city}) => ({city})

export default connect(mapStateToprops, null)(ForecastExtendedContainer);