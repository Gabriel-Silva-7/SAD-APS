import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import PizzaChart from "./components/PizzaChart";
import BarCharts from "./components/BarChart";
import Header from "./components/Header";
import * as S from "./styles";
import Card from "./components/NewCards";
import axios from "axios";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(-15);
  const [newClients, setNewClients] = useState();

  const getNewClients = async () => {
    const response = await axios.post("http://localhost:8080/getnewclients", {
      days: -14,
    });
    setNewClients(response.data);
  };

  useEffect(() => {
    getNewClients();
  }, []);
  console.log(newClients[0].NovosClientes);

  return (
    <div style={{ padding: "20px", width: "98%" }}>
      <Header
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div style={{ width: "97.5%", marginLeft: "1.25%" }}>
        <Divider />
      </div>
      <S.GridContainer>
        <S.CardGrid>
          <Card
            title="Novos Clientes"
            date="Semanal"
            total={newClients && newClients[0]?.NovosClientes}
            percent={newClients && newClients[0]?.PercentualAumento}
          />
          <Card title="Activity" date="yearly" />
          <Card title="Real-Time" />
          <Card title="Bounce" date="annual" />
        </S.CardGrid>
        <S.ChartContainer>
          <BarCharts selectedOption={selectedOption} />
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
