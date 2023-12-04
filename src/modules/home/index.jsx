import { useState } from "react";
import { Divider } from "@mui/material";
import PizzaChart from "./components/PizzaChart";
import BarCharts from "./components/BarChart";
import Header from "./components/Header";
import * as S from "./styles";
import Card from "./components/NewCards";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px", width: "98%" }}>
      <Header />
      <div style={{ width: "97.5%", marginLeft: "1.25%" }}>
        <Divider />
      </div>
      <S.GridContainer>
        <S.CardGrid>
          <Card title="Novos Usuarios" date="Semanal" />
          <Card title="Activity" date="yearly" />
          <Card title="Real-Time" />
          <Card title="Bounce" date="annual" />
        </S.CardGrid>
        <S.ChartContainer>
          <BarCharts />
        </S.ChartContainer>
        <S.ChartContainer>
          <PizzaChart />
        </S.ChartContainer>
        <S.ChartContainer>
          <PizzaChart />
        </S.ChartContainer>
      </S.GridContainer>
    </div>
  );
};

export default Dashboard;
