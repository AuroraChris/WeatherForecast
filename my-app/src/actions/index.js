import axios from "axios";
const API_KEY = "dd73d8cf05565ba9a3e5ff8945e4a1bd";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}, us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
