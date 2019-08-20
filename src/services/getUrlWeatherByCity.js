import { apiURL, api_key } from '../constants/api_url'

const getUrlByCity = city => {
  return `${apiURL}?q=${city}&appid=${api_key}`
}

export default getUrlByCity;