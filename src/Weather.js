import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-header">
          <h1>WeatherApp</h1>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-8 search">
              <form id="search">
                <input
                  type="search"
                  name="q"
                  id="city-input"
                  placeholder="Enter city"
                  autoComplete="off"
                />
                <button class="submit" id="search-btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className="col-4">
              <button id="cur-loc-btn">
                <i class="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col col-left">
              <div className="cur-city-title" id="city">
                Helsinki
              </div>
              <div className="row">
                <div className="col cur-date">
                  Last upd: <span id="cur-date">Wed, Jun 01, 15:48</span>
                </div>
              </div>
              <div className="row">
                <div className="col" id="cur-weather">
                  <div className="cur-temperature">
                    <span className="temp-value" id="cur-temp-value">
                      19
                    </span>
                    <span className="unit cur-unit" id="cur-unit">
                      °C
                    </span>
                  </div>
                  <div className="cur-feels-like-title">
                    Feels like <span id="cur-feels-like-temp">20</span>
                    <span className="unit cur-unit">°C</span>
                  </div>
                  <div className="weather-emoji" id="cur-weather-emoji">
                    ☀️
                  </div>
                  <div className="row">
                    <div className="col" id="weather-decription">
                      Sunny
                    </div>
                    <div className="col">
                      <span className="wind-title">
                        Wind: <span id="wind">2</span> m/h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
