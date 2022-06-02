import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import FormatWeekDay from "./FormatWeekDay";
import FormatMonth from "./FormatMonth";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let apiKey = "f7ab8c50642226d2981457d7445b4fa2";
  let unitSys = "metric";
  let exclude = "current,minutely,hourly,alerts";
  let [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setForecastData({
      timestamp: response.data.daily[2].dt * 1000,
      minTemp: Math.round(response.data.daily[2].temp.min),
      maxTemp: Math.round(response.data.daily[2].temp.max),
      emojiCode: response.data.daily[2].weather[0].icon,
      ready: true,
    });
  }

  if (forecastData.ready) {
    let now = new Date(forecastData.timestamp);
    return (
      <div className="Forecast">
        <div className="forecast-title">Forecast</div>
        <div className="row">
          <div className="col-4 weekday" id="weekday">
            <div className="day" id="day">
              <FormatWeekDay form="long" dayIndex={now.getDay()} />
            </div>
            <div className="date" id="date">
              <FormatMonth monthIndex={now.getMonth()} /> {now.getDate()}
            </div>
          </div>
          <div className="col-5 temperature">
            <span className="temp-value max-temp-value" id="max-temperature">
              {forecastData.maxTemp}
            </span>
            <span className="unit">°C</span>/
            <span className="temp-value min-temp-value" id="min-temperature">
              {forecastData.minTemp}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-3 weather-emoji" id="weather-emoji">
            <WeatherIcon iconCode={forecastData.emojiCode} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${exclude}&units=${unitSys}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
