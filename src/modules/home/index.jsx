import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import PizzaChart from "./components/PizzaChart";
import LineChart from "./components/LineChart";
import Header from "./components/Header";
import * as S from "./styles";
import Card from "./components/NewCards";
import axios from "axios";
import BarCharts from "./components/BarChart";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(-15);
  const [newClients, setNewClients] = useState();
  const [sellQuantityBetweenWeeks, setSellQuantityBetweenWeeks] = useState();
  const [mostSellFoodPlate, setMostSellFoodPlate] = useState();
  const [filialMostSell, setFilialMostSell] = useState();

  const getNewClients = async () => {
    const response = await axios.post(
      "https://gastronom.azurewebsites.net/getnewclients",
      {
        days: -14,
      }
    );
    setNewClients(response.data);
  };

  const getsellQuantityBetweenWeeks = async () => {
    const response = await axios.post(
      "https://gastronom.azurewebsites.net/getsellsquantitybetweenweeks"
    );
    setSellQuantityBetweenWeeks(response.data);
  };

  const getMostSellFoodPlate = async () => {
    const response = await axios.post(
      "https://gastronom.azurewebsites.net/getmostsellfoodplate"
    );
    setMostSellFoodPlate(response.data);
  };

  const getTotalSellByFilial = async () => {
    const response = await axios.post(
      "https://gastronom.azurewebsites.net/gettotalsellbyfilial"
    );
    setFilialMostSell(response.data.responsegetTotalSell);
  };

  const getPredictDays = async () => {
    const response = await axios.post(
      "http://localhost:5000/predictDay",
      { days: selectedOption ^ -1 },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  };

  useEffect(() => {
    getNewClients();
    getsellQuantityBetweenWeeks();
    getMostSellFoodPlate();
    getTotalSellByFilial();
    getPredictDays();
  }, []);

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
          <Card
            title="Vendas"
            date="Semanal"
            total={
              sellQuantityBetweenWeeks &&
              sellQuantityBetweenWeeks[0]?.TotalVendasUltimos7Dias
            }
            percent={
              sellQuantityBetweenWeeks &&
              sellQuantityBetweenWeeks[0]?.PercentualAumento
            }
          />
          <Card
            title="Prato mais vendido"
            prato={mostSellFoodPlate && mostSellFoodPlate[0]?.Nome_Prato}
            date="Semanal"
            total={
              mostSellFoodPlate && mostSellFoodPlate[0]?.UnidadesUltimos7Dias
            }
            percent={
              mostSellFoodPlate && mostSellFoodPlate[0]?.PercentualVariacao
            }
          />
          <Card
            title="Filial Com Mais Vendas"
            date="Semanal"
            filial={filialMostSell && filialMostSell[0]?.Cidade_Filial}
            total={filialMostSell && filialMostSell[0]?.ValorFilial}
          />
        </S.CardGrid>
        <S.ChartContainer>
          <LineChart selectedOption={selectedOption} />
        </S.ChartContainer>
        <S.ChartContainer>
          <div>Vendas por Filial</div>
          <PizzaChart />
        </S.ChartContainer>
        <S.ChartContainer>
          <BarCharts selectedOption={selectedOption} />
        </S.ChartContainer>
      </S.GridContainer>
    </div>
  );
};

export default Dashboard;
