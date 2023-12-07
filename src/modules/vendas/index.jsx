import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Header from "./components/Header/";
import * as S from "./styles";
import axios from "axios";
import LineChartsSellPerDay from "./components/LineChart";
import LineCharts from "../home/components/LineChart/";

const Vendas = () => {
  const [selectedOption, setSelectedOption] = useState(-15);

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
        <S.ChartContainer>
          <div style={{ marginTop: 10, marginLeft: 10 }}>
            Quantidade de Vendas por dia
          </div>
          <LineChartsSellPerDay selectedOption={selectedOption} />
        </S.ChartContainer>

        <S.ChartContainer>
          <div style={{ marginTop: 10, marginLeft: 10 }}>Vendas em Reais</div>
          <LineCharts selectedOption={selectedOption} />
        </S.ChartContainer>
      </S.GridContainer>
    </div>
  );
};

export default Vendas;
