import React from "react";
import FormatWeekDay from "./FormatWeekDay";
import FormatMonth from "./FormatMonth";

export default function FormattedDate(props) {
  function formatTime(hour, min) {
    let hours = hour;
    let minutes = min;
    if (hour < 10) {
      hours = `0${hour}`;
    }
    if (min < 10) {
      minutes = `0${min}`;
    }
    return `${hours}:${minutes}`;
  }
  let now = new Date(props.timestamp);

  return (
    <span>
      <FormatWeekDay form="short" dayIndex={now.getDay()} />
      {", "}
      <FormatMonth monthIndex={now.getMonth()} /> {now.getDate()}
      {", "}
      {formatTime(now.getHours(), now.getMinutes())}
    </span>
  );
}
