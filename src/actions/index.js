import {apiForecastURL, api_key, apiWeatherURL} from '../constants/api_url'
import transformWeather from '../services/transformWeather'
import { transformForecast } from '../services/transformForecast'

// types
export const SET_CITY = "SET_CITY"
export const SET_FORECAST_DATA = "SET_FORECAST_DATA"
export const GET_WEATHER_CITY = "GET_WEATHER_CITY"
export const SET_WEATHER_CITY = "SET_WEATHER_CITY"

// action creators
const setCity = payload => ({ type: SET_CITY, payload })
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload})
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload})

export const setSelectedCity = payload => {
  return async (dispatch, getState) => {
    const url = `${apiForecastURL}?q=${payload}&appid=${api_key}`

    // activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload))

    const state = getState()
    const date = state.cities && state.cities[payload].forecastDataDate
    const now = new Date()

    if(date && (now - date) < 1 * 60 * 1000) {
      return
    }

    return fetch(url).then(
      data => (data.json())
      ).then(
        weather_data => {
          const forecastData = transformForecast(weather_data)
          // console.log(weather_data)

          // modificar el estado con el que el resultado del promise (fetch)
          dispatch(setForecastData({city: payload, forecastData}))
        }
      )
  }
}

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city))
      const api_weather = `${apiWeatherURL}?q=${city}&appid=${api_key}`

      fetch(api_weather).then( resolve => {
        return resolve.json()
      }).then( weather_data => {
        const weather = transformWeather(weather_data)
        dispatch(setWeatherCity({city, weather}))

      })
    })
  }
}
