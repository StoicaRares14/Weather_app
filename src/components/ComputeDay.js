const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getWeekDay = (forecastDate) => {
  var date = new Date(forecastDate);
  var today = new Date();
  var date_today =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var date_forecast =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  if (date_forecast === date_today) {
    return "Today";
  } else {
    return weekDays[date.getDay()];
  }
};
