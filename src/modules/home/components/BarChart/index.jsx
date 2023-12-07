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
  BarChart,
  Bar,
} from "recharts";

const BarCharts = (props) => {
  const [data, setData] = useState([{}]);

  const getMostSellFoods = async () => {
    const response = await axios.post(
      "https://gastronom.azurewebsites.net/getMostSellFoods",
      {
        days: props.selectedOption,
      }
    );
    setData(response.data);
  };

  useEffect(() => {
    getMostSellFoods();
  }, [props.selectedOption]);

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <BarChart
        margin={{ top: 50, left: 25, right: 50, bottom: 35 }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Nome_Prato" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="TotalVendas" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
