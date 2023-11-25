import { useState } from "react";
import { Box, Grid } from "@mui/material";
import AppWidgetSummary from "./components/Cards/";
import {
  Money,
  Bank,
  BagSimple,
  Bug,
  ShoppingCart,
  Users,
} from "@phosphor-icons/react";
import { ResponsiveContainer, BarChart, Bar } from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div style={{ display: "flex", marginLeft: 170, gap: 10, marginTop: 12 }}>
      <AppWidgetSummary
        title="Weekly Sales"
        total={200000}
        color="success"
        icon={<ShoppingCart size={50} />}
      />

      <AppWidgetSummary
        title="New Users"
        total={831000}
        color="info"
        icon={<Users size={50} />}
      />

      <AppWidgetSummary
        title="Item Orders"
        total={723001}
        color="warning"
        icon={<BagSimple size={50} />}
      />

      <AppWidgetSummary
        title="Bug Reports"
        total={23}
        color="error"
        icon={<Bug size={50} />}
      />
    </div>
  );
};

export default Dashboard;
