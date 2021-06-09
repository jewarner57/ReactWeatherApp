import React from 'react';
import './WeatherDetail.css'

function WeatherDetail(props) {
  const { pressure, humidity, temp_min, temp_max } = props.weather

  return (
    <div className="WeatherDetail">
      <p><strong>Details</strong></p>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Temp Min: {temp_min} Max:{temp_max}</div>
    </div>
  );
}

export default WeatherDetail
