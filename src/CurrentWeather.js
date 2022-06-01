import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="cur-city-title" id="city">
        {props.data.city}
      </div>
      <div className="row">
        <div className="col cur-date">
          Last upd:{" "}
          <span id="cur-date">
            <FormattedDate timestamp={props.data.date} />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col" id="cur-weather">
          <div className="cur-temperature">
            <span className="temp-value" id="cur-temp-value">
              {props.data.temperature}
            </span>
            <span className="unit cur-unit" id="cur-unit">
              °C
            </span>
          </div>
          <div className="cur-feels-like-title">
            Feels like{" "}
            <span id="cur-feels-like-temp">{props.data.feelsLike}</span>
            <span className="unit cur-unit">°C</span>
          </div>
          <div className="weather-emoji" id="cur-weather-emoji">
            <WeatherIcon iconCode={props.data.weatherIcon} />
          </div>
          <div className="row">
            <div className="col text-capitalize" id="weather-decription">
              {props.data.description}
            </div>
            <div className="col">
              <span className="wind-title">
                Wind: <span id="wind">{props.data.wind}</span> m/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
