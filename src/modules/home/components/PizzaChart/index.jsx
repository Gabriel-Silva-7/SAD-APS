import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const StyledPieChart = styled(PieChart)`
  margin: auto;
`;

const PizzaChart = () => {
  const [data, setData] = useState();

  const getTotalSellByFilial = async () => {
    axios
      .post("http://localhost:8080/gettotalsellbyfilial")
      .then((response) => {
        setData(response?.data?.responsegetTotalSellByFilial);
      });
  };

  const renderTooltipContent = (props) => {
    const { payload } = props;
    if (!payload || payload.length === 0) return null;

    const { Razao_Social, ValorFilial } = payload[0].payload;

    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p>
          <strong>Nome do Cliente:</strong> {Razao_Social}
        </p>
        <p>
          <strong>Valor:</strong> {ValorFilial}
        </p>
      </div>
    );
  };

  const renderLegendContent = (props) => {
    const { payload } = props;

    return (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {payload?.map((entry, index) => (
          <li key={`legend-${index}`}>
            <span
              style={{
                backgroundColor: entry.color,
                width: "10px",
                height: "10px",
                display: "inline-block",
                marginRight: "5px",
              }}
            />
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    getTotalSellByFilial();
  }, []);

  return (
    <ResponsiveContainer>
      <StyledPieChart>
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="ValorFilial"
        >
          {data?.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            ></Cell>
          ))}
        </Pie>
        <Tooltip content={renderTooltipContent} />
      </StyledPieChart>
    </ResponsiveContainer>
  );
};

export default PizzaChart;
