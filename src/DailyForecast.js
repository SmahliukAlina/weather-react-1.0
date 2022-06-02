import React from "react";
import FormatWeekDay from "./FormatWeekDay";
import FormatMonth from "./FormatMonth";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
  }

  let date = new Date(props.data.dt * 1000);
  let emojiCode = props.data.weather[0].icon;

  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col-4 weekday" id="weekday">
          <div className="day" id="day">
            <FormatWeekDay form="long" dayIndex={date.getDay()} />
          </div>
          <div className="date" id="date">
            <FormatMonth monthIndex={date.getMonth()} form="long" />{" "}
            {date.getDate()}
          </div>
        </div>
        <div className="col-5 temperature">
          <span className="temp-value max-temp-value" id="max-temperature">
            {maxTemp()}
          </span>
          <span className="unit">°C</span>/{" "}
          <span className="temp-value min-temp-value" id="min-temperature">
            {minTemp()}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3 weather-emoji" id="weather-emoji">
          <WeatherIcon iconCode={emojiCode} />
        </div>
      </div>
    </div>
  );
}
