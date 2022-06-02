import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState({ search: "location", name: null });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      weatherIcon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      ready: true,
    });
  }

  function searchByCity() {
    const apiKey = "f7ab8c50642226d2981457d7445b4fa2";
    const unitSys = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=${unitSys}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchByLocation(lat, lon) {
    const apiKey = "f7ab8c50642226d2981457d7445b4fa2";
    const unitSys = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unitSys}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchByCity();
  }

  function handleCityChange(event) {
    setCity({ name: event.target.value });
  }

  function getLocation(position) {
    searchByLocation(
      Math.round(position.coords.latitude),
      Math.round(position.coords.longitude)
    );
  }

  function handleCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getLocation);
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
                <form id="searchByCity" onSubmit={handleSubmit}>
                  <input
                    type="search"
                    name="q"
                    id="city-input"
                    placeholder="Enter city"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                  <button className="submit ms-3" id="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="col-4">
                <button id="cur-loc-btn" onClick={handleCurrentLocation}>
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col col-left">
                <CurrentWeather data={weatherData} />
              </div>

              <div className="col col-right">
                <Forecast
                  longitude={weatherData.longitude}
                  latitude={weatherData.latitude}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (city.search === "location") {
      navigator.geolocation.getCurrentPosition(getLocation);
      setCity({ search: "city" });
    } else {
      searchByCity();
    }
    return <div>Loading....</div>;
  }
}
