import React, { useState } from "react";

export class DataInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2021-02-11",
      temp: 60,
      weatherType: "Rainy",
      outside: false
    };
    this.onTempChange = this.onTempChange.bind(this);
    this.onWeatherTypeChange = this.onWeatherTypeChange.bind(this);
    this.onOutsideChange = this.onOutsideChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }
  onDateChange(e) {
    this.setState({ date: e.target.value });
  }
  onTempChange(e) {
    this.setState({ temp: Number(e.target.value) });
  }
  onWeatherTypeChange(e) {
    this.setState({ weatherType: e.target.value });
  }
  onOutsideChange(e) {
    this.setState({ outside: e.target.checked });
  }
  onAddClick() {
    this.props.addNew(this.state);
    this.setState({
      date: "2021-02-11",
      temp: 60,
      weatherType: "Rainy",
      outside: false
    });
  }
  render() {
    return (
      <div>
        <div>
          <div />
          <h2 id="entry-title">Data Entry</h2>
          <div>
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              id="date"
              min="1970-01-01"
              max="2070-01-01"
              value={this.state.date}
              name="day"
              onChange={this.onDateChange}
            />
          </div>
          &nbsp;
          <div>
            <label htmlFor="temp">Temperature: </label>
            <input
              id="temp"
              type="number"
              onChange={this.onTempChange}
              value={this.state.temp}
            />
          </div>
          &nbsp;
          <div>
            <label htmlFor="weatherType">Weather Type: </label>
            <select
              id="weatherType"
              value={this.state.weatherType}
              onChange={this.onWeatherTypeChange}
            >
              <option value="Clear">Clear</option>
              <option value="Rainy">Rainy</option>
              <option value="Cloudy">Cloudy</option>
              <option value="Windy">Windy</option>
              <option value="Sunny">Sunny</option>
              <option value="Snowy">Snowy</option>
            </select>
          </div>
          &nbsp;
          <div>
            <label htmlFor="outside">Did you go outside? </label>
            <input
              id="outside"
              type="checkbox"
              onChange={this.onOutsideChange}
              checked={this.state.outside}
            />
          </div>
          <br />
          <button onClick={this.onAddClick}>Add</button>
        </div>
      </div>
    );
  }
}
