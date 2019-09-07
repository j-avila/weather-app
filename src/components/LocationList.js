import React from 'react'
import WeatherLocation from './weatherLocation'

const LocationList = ({cities, onSelectedLocation}) => {
  const handleLocation = city =>{
    onSelectedLocation(city)
  }

  const citiesToComponent = cities => (
    cities.map((city, index) => {
      return(
        <WeatherLocation
          key={city}
          city={city}
          clickedLocation={() =>{handleLocation(city)}}
        />
      )
    })
  )

  return (
    <div className="location-list">{ citiesToComponent(cities) }</div>
  )  
}

export default LocationList