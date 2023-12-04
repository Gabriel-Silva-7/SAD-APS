import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const data = [
  { name: "Categoria 1", value: 400 },
  { name: "Categoria 2", value: 300 },
  { name: "Categoria 3", value: 300 },
  { name: "Categoria 4", value: 200 },
  { name: "Categoria 5", value: 200 },
  { name: "Categoria 6", value: 200 },
  { name: "Categoria 7", value: 200 },
  { name: "Categoria 8", value: 200 },
];

const StyledBarChart = styled(BarChart)`
  margin: auto;
`;

const BarCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <StyledBarChart
        margin={{ top: 50, left: 25, right: 50, bottom: 35 }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </StyledBarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
