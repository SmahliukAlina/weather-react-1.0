import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  let [units, setUnits] = useState({
    system: "celsius",
    unit: "°C",
    button: "°F",
  });

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits({
      system: "fahrenheit",
      unit: "°F",
      button: "°C",
    });
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits({
      system: "celsius",
      unit: "°C",
      button: "°F",
    });
  }

  function calculateFahrenheit(celsTemp) {
    return Math.round((celsTemp * 9) / 5 + 32);
  }

  if (units.system === "celsius") {
    return (
      <div className="CurrentTemperature">
        <div className="cur-temperature">
          <span className="temp-value" id="cur-temp-value">
            {props.tempCelsius}
          </span>
          <span className="unit cur-unit" id="cur-unit">
            {units.unit}
          </span>
          <span>
            <button id="change-unit-btn" value="°F" onClick={showFahrenheit}>
              {units.button}
            </button>
          </span>
        </div>
        <div className="cur-feels-like-title">
          Feels like{" "}
          <span id="cur-feels-like-temp">{props.feelsLikeCelsius}</span>
          <span className="unit cur-unit">°C</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <div className="cur-temperature">
          <span className="temp-value" id="cur-temp-value">
            {calculateFahrenheit(props.tempCelsius)}
          </span>
          <span className="unit cur-unit" id="cur-unit">
            {units.unit}
          </span>
          <span>
            <button id="change-unit-btn" value="°F" onClick={showCelsius}>
              {units.button}
            </button>
          </span>
        </div>
        <div className="cur-feels-like-title">
          Feels like{" "}
          <span id="cur-feels-like-temp">
            {calculateFahrenheit(props.feelsLikeCelsius)}
          </span>
          <span className="unit cur-unit">{units.unit}</span>
        </div>
      </div>
    );
  }
}
