import React from "react";
import {
  PieChart,
  Pie,
  Cell,
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
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const StyledPieChart = styled(PieChart)`
  margin: auto;
`;

const PizzaChart = () => {
  return (
    <ResponsiveContainer>
      <StyledPieChart>
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </StyledPieChart>
    </ResponsiveContainer>
  );
};

export default PizzaChart;
