import React from "react";

export default function FormatMonth(props) {
  const months = [
    { short: "Jan", long: "January" },
    { short: "Feb", long: "February" },
    { short: "Mar", long: "March" },
    { short: "Apr", long: "April" },
    { short: "May", long: "May" },
    { short: "Jun", long: "June" },
    { short: "Jul", long: "July" },
    { short: "Aug", long: "August" },
    { short: "Sep", long: "September" },
    { short: "Oct", long: "October" },
    { short: "Nov", long: "November" },
    { short: "Dec", long: "December" },
  ];

  if (props.form === "short") {
    return <span>{months[props.monthIndex].short}</span>;
  } else {
    return <span>{months[props.monthIndex].long}</span>;
  }
}
