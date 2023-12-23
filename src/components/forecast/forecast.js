import React from "react";
import "./forecast.css";

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <div className="forecast-container">
      {data.list.slice(0, 7).map((item, idx) => (
        <div key={idx} className="daily-item">
          <div className="day">{forecastDays[idx]}</div>
          <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
          <div className="min-max">{Math.round(item.main.temp_max)}°C</div>
          <div className="min-max">{Math.round(item.main.temp_min)}°C</div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;