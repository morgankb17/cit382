import React, { useState } from "react";

export function DataInput() {
  const handleSaveClick = () => {};

  return (
    <div>
      <div>
        <div />
        <h2>Data Entry</h2>
        <div>
          <label htmlFor="TemperatureInput">Temperature: </label>

          <input id="TemperatureInput" type="number" />
        </div>
        <br />
        <div>
          <label htmlFor="WeatherTypes">Weather Type: </label>
          <select>
            <option value="Clear">Clear</option>
            <option value="Rainy">Rainy</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Windy">Windy</option>
            <option value="Sunny">Sunny</option>
            <option value="Snowy">Snowy</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="OutsideCheckbox">Did you go outside? </label>
          <input id="OutsideCheckbox" type="checkbox" />
        </div>
        <br />
        <div>
          <label htmlFor="GradCheckbox">Day: </label>
          <div>
            <input type="radio" id="Monday" value="Monday" name="gender" />
            Monday
            <input type="radio" id="Tuesday" value="Tuesday" name="gender" />
            Tuesday
            <input
              type="radio"
              id="Wednesday"
              value="Wednesday"
              name="gender"
            />
            Wednesday
            <input type="radio" id="Thursday" value="Thursday" name="gender" />
            Thursday
            <input type="radio" id="Friday" value="Friday" name="gender" />
            Friday
            <input type="radio" id="Saturday" value="Saturday" name="gender" />
            Saturday
            <input type="radio" id="Sunday" value="Sunday" name="gender" />
            Sunday
          </div>
        </div>
        <div>
          <br />
          <div>
            <button onClick={handleSaveClick}>Save </button>
          </div>
        </div>
      </div>
    </div>
  );
}
