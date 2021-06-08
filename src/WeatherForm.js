
import React, { Component } from 'react';
import WeatherData from './WeatherData'
import './WeatherForm.css';

class WeatherForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      radioValue: 'imperial',
      weatherData: null,
    }

    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleRadioChange(event) {
    this.setState({
      radioValue: event.target.value
    });
  }

  submit() {
    // ! Get your own API key ! 
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    // Get the zip from the input
    const zip = this.state.inputValue
    // Get the units from the radio input
    const units = this.state.radioValue
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}&units=${units}`
    // Get data from the API with fetch
    fetch(url).then(res => {
      // Handle the response stream as JSON
      return res.json()
    }).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({ weatherData: json })
      // ! This needs better error checking here or at renderWeather() 
      // It's possible to get a valid JSON response that is not weather 
      // data, for example when a bad zip code entered.
    }).catch((err) => {
      // If there is no data 
      this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
      // Print an error to the console. 
      console.log('-- Error fetching --')
      console.log(err.message)
      // You may want to display an error to the screen here. 
    })
  }

  render() {
    return (
      <div className="WeatherForm">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className='zipFieldContainer'>
            <input
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
              type="text"
              pattern="(\d{5}([\-]\d{4})?)"
              placeholder="Enter Zipcode"
            />
            <div onClick={this.submit} className="submitWeather">Submit</div>
          </div>

          <div>
            <input type="radio" id="imperial" name="unit" value="imperial" onChange={this.handleRadioChange} checked={this.state.radioValue === 'imperial'} />
            <label for="imperial">Imperial</label>
          </div>

          <div>
            <input type="radio" id="metric" name="unit" value="metric" onChange={this.handleRadioChange} checked={this.state.radioValue === 'metric'} />
            <label for="metric">Metric</label>
          </div>

          <div>
            <input type="radio" id="standard" name="unit" value="standard" onChange={this.handleRadioChange} checked={this.state.radioValue === 'standard'} />
            <label for="standard">Standard</label>
          </div>

        </form>
        {this.state.weatherData ? <WeatherData weather={this.state.weatherData}></WeatherData> : ''}

      </div>
    );
  }
}

export default WeatherForm;