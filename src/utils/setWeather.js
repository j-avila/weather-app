import axios from "axios";
import convertUnits from "convert-units";

const setWeather = (location, handleState, mode = "weather") => {
  const { city, country, countryCode } = location;
  const apiWeather = process.env.REACT_APP_API_WEATHER_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  let url = `${apiWeather}${mode}?q=${city},${countryCode}&appid=${apiKey}`;
  axios
    .get(url)
    .then((resp) => {
      const { data } = resp;
      if (mode === "weather") {
        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C").toFixed(0)
        );
        const state = data.weather[0].main.toLowerCase();
        const propName = `${city}-${country}`;
        const propValue = { temperature, state };
        handleState((allWeather) => ({ ...allWeather, [propName]: propValue }));
      } else {
        handleState(data);
      }
    })
    .catch((err) => console.log(err));
};

export default setWeather;
