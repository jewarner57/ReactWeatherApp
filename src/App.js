
import React, { Component } from 'react';
import WeatherForm from './WeatherForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Get Dat Weather</h1>
        <WeatherForm></WeatherForm>
      </div>
    );
  }
}

export default App;


