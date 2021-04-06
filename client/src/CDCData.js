import React from 'react';
import './App.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Dec 2019",
    recovered: 9800,
    deaths: 7500,
    amt: 2400
  },
  {
    name: "Feb 2020",
    recovered: 8000,
    deaths: 6700,
    amt: 2210
  },
  {
    name: "Apr 2020",
    recovered: 7000,
    deaths: 5000,
    amt: 2290
  },
  {
    name: "Aug 2020",
    recovered: 6500,
    deaths: 2300,
    amt: 2000
  },
  {
    name: "Nov 2020",
    recovered: 4800,
    deaths: 2400,
    amt: 2181
  },
  {
    name: "Jan 2021",
    recovered: 2390,
    deaths: 900,
    amt: 2500
  },
  {
    name: "Apr 2021",
    recovered: 3490,
    deaths: 700,
    amt: 2100
  }
];

export default function CDCData() {
  return (
   <div>
       <h1>CDC COVID19 data for the United States</h1>
    <LineChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="recovered"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
}
