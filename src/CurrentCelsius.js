import React from "react";
import "./CurrentCelsius.css";

export default function CurrentCelsius(props) {
  return (
    <div className="CurrentCelsius">
      <div className="cur-temperature">
        <span className="temp-value" id="cur-temp-value">
          {props.tempCelsius}
        </span>
        <span className="unit cur-unit" id="cur-unit">
          °C
        </span>
      </div>
      <div className="cur-feels-like-title">
        Feels like{" "}
        <span id="cur-feels-like-temp">{props.feelsLikeCelsius}</span>
        <span className="unit cur-unit">°C</span>
      </div>
    </div>
  );
}
