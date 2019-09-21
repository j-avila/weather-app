import { apiWeatherURL, api_key } from '../constants/api_url'

const getUrlByCity = city => {
  return `${apiWeatherURL}?q=${city}&appid=${api_key}`
}

export default getUrlByCity;