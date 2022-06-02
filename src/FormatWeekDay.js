import React from "react";

export default function FormatDay(props) {
  const weekDays = [
    { short: "Sun", long: "Sunday" },
    { short: "Mon", long: "Monday" },
    { short: "Tue", long: "Tuesday" },
    { short: "Wed", long: "Wednesday" },
    { short: "Thu", long: "Thursday" },
    { short: "Fri", long: "Friday" },
    { short: "Sat", long: "Saturday" },
  ];
  let weekDay = weekDays[props.dayIndex];

  if (props.form === "short") {
    return <span>{weekDay.short}</span>;
  } else {
    return <span>{weekDay.long}</span>;
  }
}
