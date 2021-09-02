import React, { useState } from "react";
import { DataGraph } from "./DataGraph.js";
import { DataList } from "./DataList.js";
import { DataInput } from "./DataInput.js";
import "./styles.css";

const msInDay = 86400000;

const preset_data = [
  { date: "2021-01-27", temp: 46, outside: false, weatherType: "Cloudy" },
  { date: "2021-01-30", temp: 48, outside: false, weatherType: "Clear" },
  { date: "2021-02-02", temp: 36, outside: false, weatherType: "Cloudy" },
  { date: "2021-02-05", temp: 33, outside: false, weatherType: "Windy" },
  { date: "2021-02-07", temp: 29, outside: true, weatherType: "Snowy" },
  { date: "2021-02-10", temp: 24, outside: true, weatherType: "Snowy" },
  { date: "2021-02-13", temp: 39, outside: true, weatherType: "Windy" }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.addNew = this.addNew.bind(this);
    this.clear = this.clear.bind(this);
    this.default = this.default.bind(this);
  }

  componentDidMount() {
    this.default();
  }

  addNew(item) {
    if (this.state.data.length >= 7) {
      alert("List max of 7 has already been reached!");
      return;
    }
    item["criteria"] = Math.ceil(
      new Date(item["date"] + " UTC").valueOf() / msInDay
    );
    this.setState((state) => {
      const newData = state.data.concat(item);
      newData.sort((a, b) => {
        return a.criteria - b.criteria;
      });
      return {
        data: newData
      };
    });
  }

  clear() {
    this.setState({ data: [] });
  }
  default() {
    preset_data.forEach((i, idx) => {
      this.addNew(i);
    }, this);
  }

  render() {
    return (
      <div className="grid-container">
        <h1 className="title">WEEKLY TEMPERATURES</h1>
        <div className="DataList">
          <DataList
            id="data"
            data={this.state.data}
            handleClear={this.clear}
            handleDefault={this.default}
          />
        </div>
        <div className="DataInput">
          <DataInput addNew={this.addNew} />
        </div>
        <div className="DataGraph">
          <DataGraph data={this.state.data} />
        </div>
      </div>
    );
  }
}
