import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Dec 2019",
    recovered: 25000,
    infected: 31000,
    deaths: 21000
  },
  {
    name: "Mar 2020",
    recovered: 24000,
    infected: 30000,
    deaths: 20000
  },
  {
    name: "Jun 2020",
    recovered: 22000,
    infected: 29000,
    deaths: 18000
  },
  {
    name: "Aug 2020",
    recovered: 10000,
    infected: 12000,
    deaths: 11500
  },
  {
    name: "Nov 2020",
    recovered: 9000,
    infected: 10500,
    deaths: 11000
  },
  {
    name: "Jan 2021",
    recovered: 6500,
    infected: 7500,
    deaths: 2300
  },
  {
    name: "Apr 2021",
    recovered: 3490,
    infected: 4300,
    deaths: 1500
  }
];

export default function WHOData() {
  return (
      <div>
      <h1>WHO Global COVID19 Barchart Data</h1>
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 20,
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
      <Bar dataKey="deaths" stackId="a" fill="#8884d8" />
      <Bar dataKey="infected" stackId="a" fill="#82ca9d" />
      <Bar dataKey="recovered" fill="#ffc658" />
    </BarChart>
    </div>
  );
}
