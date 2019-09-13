import {apiForecastURL, api_key} from '../constants/api_url'
import transformWeather from '../services/transformWeather'

// types
export const SET_CITY = "SET_CITY"
export const SET_FORECAST_DATA = "SET_FORECAST_DATA"

// action creators
const setCity = payload => ({ type: SET_CITY, payload})
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

export const setSelectedCity = payload => {

  return dispatch => {
    const url = `${apiForecastURL}?q=${payload}&appid=${api_key}`

    // activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload))
    return fetch(url).then(
      data => (data.json())
      ).then(
        weather_data => {
          const forecastData = transformWeather(weather_data)
          console.log(forecastData)

          // modificar el estado con el que el resultado del promise (fetch)
          dispatch(setForecastData({city: payload, forecastData}))
        }
      )
  }
}
