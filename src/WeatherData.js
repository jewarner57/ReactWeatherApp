import React from 'react';
import './WeatherData.css'

function WeatherData(props) {
  const { temp, pressure, humidity, temp_min, temp_max, feels_like } = props.weather.main
  const { main, description, icon } = props.weather.weather[0]

  return (
    <div className="WeatherData">
      <div className="weatherHighlight">
        <p className='temp'>{temp}</p>
        <img alt="weather icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>

      <div className="weatherSecondary">
        <div>
          <p>Feels like: {feels_like}</p>
          <p>{description}</p>
        </div>
        <div className="detailsArrow">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" /></svg>
        </div>
      </div>
      {/* 
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Temp Min: {temp_min} Max:{temp_max}</div> */}
    </div>
  );
}

export default WeatherData