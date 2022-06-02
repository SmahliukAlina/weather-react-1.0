import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";

import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  let apiKey = "f7ab8c50642226d2981457d7445b4fa2";
  let unitSys = "metric";
  let exclude = "current,minutely,hourly,alerts";
  let [forecastData, setForecastData] = useState({ ready: false });

  useEffect(() => {
    setForecastData({ ready: false });
  }, [props.latitude]);

  function handleResponse(response) {
    setForecastData({
      weatherDaily: response.data.daily,
      ready: true,
    });
  }

  if (forecastData.ready) {
    return (
      <div className="Forecast">
        <div className="forecast-title">Forecast</div>
        {forecastData.weatherDaily.map(function (dailyData, index) {
          if (index > 1 && index < 7) {
            return <DailyForecast data={dailyData} />;
          }
        })}
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${exclude}&units=${unitSys}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
