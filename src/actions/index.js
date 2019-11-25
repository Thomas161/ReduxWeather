import axios from "axios";
const API_KEY = "1a425e11bb04696c4f6f6ab481b9e74d";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const response = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: response
  };
}
