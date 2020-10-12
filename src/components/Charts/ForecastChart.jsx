import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import PropTypes from 'prop-types'

const ForecastChart = ({ data, width, height }) => {
  return (
    <ResponsiveContainer height={250} width={'95%'}>
      <LineChart
        // width={width ? width : 1000}
        // height={height ? height : 300}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        data={data}
      >
        <XAxis dataKey='dayHour' />
        <YAxis />
        <Line type='monotone' dataKey='min' color='#8e68ea' />
        <Line type='monotone' dataKey='max' color='#F5261E' />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray='3 3' />
      </LineChart>
    </ResponsiveContainer>
  )
}

ForecastChart.propTypes = {
  data: PropTypes.shape({
    dayHour: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
}

export default ForecastChart
