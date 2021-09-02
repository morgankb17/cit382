import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import React from "react";

const msInDay = 86400000;

// just an idea, but i was thinking of adding a fadeIn/fadeOut component
// for adding things to the list to make it look pretty and flow nicely.. thoughts?
export class DataGraph extends React.Component {
  dateFormatter(item) {
    return new Date((item + 1) * msInDay).toDateString(); // item + 1 needed for fixing bug with Date objects
  }
  render() {
    return (
      <div id="chart">
        <LineChart
          width={800}
          height={400}
          data={this.props.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            name="Date"
            dataKey="criteria"
            type="number"
            domain={["dataMin", "dataMax"]}
            tickFormatter={this.dateFormatter}
          />
          <YAxis />
          <Tooltip
            formatter={function (value, name) {
              return [`${value}°F`, `Temperature`];
            }}
            labelFormatter={this.dateFormatter}
          />
        </LineChart>
      </div>
    );
  }
}
// css is completely workable and ready to be changed because all other parts of proj ar edone,
// just figuring out how to map data within this rechart api

// {['testuig props types']}
//https://reactjs.org/docs/typechecking-with-proptypes.html
// piece of shit computer i want to turn into nba machine <-- tonight

// trying to learn and type rn is hard
// we learnin more bout hooks rn
// i havent really learned hoooks yet they're prolyl really useful
// itslike the
// usehook sh it
// cani  use jumper cables for xbox power supply
// yes
// thank god
