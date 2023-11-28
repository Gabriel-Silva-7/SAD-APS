import { CardContent } from "@mui/material";
import React from "react";
import * as S from "./styles";

const Card = () => {
  return (
    <S.ContainerCard>
      <div style={{ padding: 20 }}>
        <div>
          <div>Visitantes</div>
          <div>mensal</div>
        </div>
        <div>3.213,12</div>
        <div>
          <div>14% +</div>
          <div>desde a ultima semana</div>
        </div>
      </div>
    </S.ContainerCard>
  );
};

export default Card;
