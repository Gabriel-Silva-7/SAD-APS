import { useState } from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import AppWidgetSummary from "./components/Cards/";
import {
  Money,
  Bank,
  BagSimple,
  Bug,
  ShoppingCart,
  Users,
} from "@phosphor-icons/react";
import Header from "./components/Header";
import { styled } from "@mui/system";
import * as S from "./styles";
import PizzaChart from "./components/PizzaChart";
import BarCharts from "./components/BarChart";
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
          <Card />
          <Card />
          <Card />
          <Card />
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
