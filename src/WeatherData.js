import React from 'react';
import './WeatherData.css'

function WeatherData(props) {
  const { temp, pressure, humidity, temp_min, temp_max } = props.weather.main
  const { main, description, icon } = props.weather.weather[0]

  return (
    <div className="WeatherData">
      <div>Title: {main}</div>
      <div>Desc: {description}</div>
      <div>Icon: {icon}</div>
      <img alt="weather icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <div>Temp: {temp}</div>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Temp Min: {temp_min} Max:{temp_max}</div>
    </div>
  );
}

export default WeatherData