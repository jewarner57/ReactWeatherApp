import React from 'react';

function WeatherData(props) {
  const { temp, pressure, humidity, temp_min, temp_max } = props.weather.main
  const { main, description, icon } = props.weather.weather[0]

  return (
    <div>
      <div>Title: {main}</div>
      <div>Desc: {description}</div>
      <div>Icon: {icon}</div>
      <div>Temp: {temp}</div>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Temp Min: {temp_min} Max:{temp_max}</div>
    </div>
  );
}

export default WeatherData