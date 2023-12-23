import React from "react";
import "./current-weather.css";
import Sunny from '../../svgs/Groupsunny.svg';
import FewClouds from '../../svgs/Groupclouds.svg';
import Sunrise from '../../svgs/sunrise.svg';
import Sunset from '../../svgs/sunset.svg';
import wind from '../../svgs/wind.svg';

const iconMapping = {
  'Clear': Sunny,
  'Clouds': FewClouds,
  // Add more mappings as needed
};

const CurrentWeather = ({ data }) => {
  const currentDate = new Date();
  const optionsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

  const formattedDate = currentDate.toLocaleDateString('en-US', optionsDate);
  const currentTime = currentDate.toLocaleTimeString('en-US', optionsTime);

  // Get the corresponding icon based on the weather description
  const weatherIcon = iconMapping[data.weather[0].main] || Sunny;

  return (
    <div className="weather">
      <div className="top">
          <h1 className="city">{data.city}</h1>
          <p className="date">{formattedDate} - {currentTime}</p>
      </div>
      <div className="center">
        <p className="temperature">{Math.round(data.main.temp)}°</p>
        <div className="weather-desc">
          <img alt="weather" className="weather-icon" src={weatherIcon} />
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="bottom">
          
          <div>
            <img src={Sunrise}></img>
            <p className="parameter-value">
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', optionsTime)}
            </p>
          </div>
          <div>
            <img src={wind}></img>
            <p className="parameter-value">
              {Math.round(data.wind.speed)} Km/h
            </p>
          </div>
          <div>
            <img src={Sunset}></img>
            <p className="parameter-value">
              {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', optionsTime)}
            </p>
          </div>
      </div>
    </div>
  );
};

export default CurrentWeather;