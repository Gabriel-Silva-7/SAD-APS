import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const BarCharts = (props) => {
  const [data, setData] = useState([{}]);

  const getSells = async () => {
    const response = await axios.post("http://localhost:8080/getsells", {
      days: props.selectedOption,
    });
    setData(response.data);
  };
  useEffect(() => {
    getSells();
  }, [props.selectedOption]);

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <LineChart
        margin={{ top: 50, left: 25, right: 50, bottom: 35 }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Data_Venda" />
        <YAxis />
        <Tooltip />
        <Line dataKey="Vendas" fill="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
