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
          key={city.key}
          city={city.name}
          clickedLocation={() =>{handleLocation(city.name)}}
          data={city.data}
        />
      )
    })
  )

  return (
    <div className="location-list">{ citiesToComponent(cities) }</div>
  )  
}

export default LocationList