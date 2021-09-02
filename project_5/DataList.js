import React, { useState } from "react";

export class DataList extends React.Component {
  render() {
    return (
      <div className="grid-item3">
        <h2 id="list-title">List</h2>
        <div id="list-buttons">
          <button id="clear" onClick={this.props.handleClear}>
            Clear
          </button>
          <button id="default" onClick={this.props.handleDefault}>
            Default
          </button>
        </div>
        {this.props.data.map((i, idx) => {
          return <ListItem key={idx} id="list" item={i} />;
        })}
      </div>
    );
  }
}


class ListItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   graphed: true
  // };
  // this.onToggle = this.onToggle.bind(this);
  // }
  // onToggle(e) {
  //   this.setState({
  // graphed: e.target.checked;
  // });;
  // }
  render() {
    return (
      <div>
        {/* <input
          type="checkbox"
          checked={this.state.graphed}
          onChange={this.onToggle}
        /> */}
        {this.props.item.date}: &nbsp;&nbsp; {this.props.item.temp}&#176; &nbsp;{" "}
        {this.props.item.weatherType} &nbsp;&nbsp;{" "}
        {this.props.item.outside ? "✅" : "❌"}
      </div>
    );
  }
}
