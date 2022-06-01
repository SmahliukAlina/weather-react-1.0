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
            <div className="col col-left"></div>
            <div className="col col-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
