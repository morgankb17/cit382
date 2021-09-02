import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
const data = [
  { name: "Monday", uv: 59 },
  { name: "Tuesday", uv: 79 },
  { name: "Wednesday", uv: 67 },
  { name: "Thursday", uv: 83 },
  { name: "Friday", uv: 93 },
  { name: "Saturday", uv: 94 },
  { name: "Sunday", uv: 90 }
];

export function DataGraph(props) {
  console.log(props.data);
  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
