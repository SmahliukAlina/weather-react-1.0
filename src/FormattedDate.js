import React from "react";

export default function FormattedDate(props) {
  const weekDays = [
    { short: "Sun", long: "Sunday" },
    { short: "Mon", long: "Monday" },
    { short: "Tue", long: "Tuesday" },
    { short: "Wed", long: "Wednesday" },
    { short: "Thu", long: "Thursday" },
    { short: "Fri", long: "Friday" },
    { short: "Sat", long: "Saturday" },
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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

  function formateFullCurDate(timestamp) {
    let now = new Date(timestamp);
    return `${weekDays[now.getDay()].short}, 
  ${months[now.getMonth()]} ${now.getDate()}, 
  ${formatTime(now.getHours(), now.getMinutes())}`;
  }

  return <span>{formateFullCurDate(props.timestamp)}</span>;
}
