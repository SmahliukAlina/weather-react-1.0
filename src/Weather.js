import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const weatherIcons = {
    "01d": "☀️",
    "01n": "☀️",
    "02d": "🌤️",
    "02n": "🌤️",
    "03d": "⛅",
    "03n": "⛅",
    "04d": "☁️",
    "04n": "☁️",
    "09d": "🌧️",
    "09n": "🌧️",
    "10d": "🌦️",
    "10n": "🌦️",
    "11d": "⛈️",
    "11n": "⛈️",
    "13d": "🌨️",
    "13n": "🌨️",
    "50d": "🌫️",
    "50n": "🌫️",
  };

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      weatherIcon: weatherIcons[response.data.weather[0].icon],
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  function search() {
    const apiKey = "f7ab8c50642226d2981457d7445b4fa2";
    const unitSys = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitSys}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-header">
            <h1>WeatherApp</h1>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-8 search">
                <form id="search" onSubmit={handleSubmit}>
                  <input
                    type="search"
                    name="q"
                    id="city-input"
                    placeholder="Enter city"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                  <button className="submit" id="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="col-4">
                <button id="cur-loc-btn">
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col col-left">
                <CurrentWeather data={weatherData} />
              </div>

              <div className="col col-right"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading....</div>;
  }
}
