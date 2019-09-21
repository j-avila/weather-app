import React from 'react'
import ForecastItem from './forecastItem'
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles.css'



let ForecastItemsDays = props =>(

  props.data.map((forecast, index) =>  (
    <ForecastItem 
      key={forecast.weekDay + index}
      weekday={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ))
    
)

const RenderProgress = () => {
  return  <LinearProgress color="secondary" />
}


const ForecastExtended = props =>{
  const {city, forecastData} = props
  
  return(
    <div className="forecastExtended">
      <h1>Pronostico extendido de {city}</h1>
      {forecastData ? 
        <ForecastItemsDays data={forecastData} />
        : <RenderProgress />
      }
    </div>
  )
}
  
export default ForecastExtended






