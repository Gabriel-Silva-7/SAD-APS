import React from "react";
import * as S from "./styles";

const Card = (props) => {
  return (
    <S.ContainerCard>
      <S.ContainerWrapper>
        <S.Header>
          <div>{props.title && props.title}</div>
          <S.Date>{props.date && props.date}</S.Date>
        </S.Header>
        <S.TotalClients>3.213,12</S.TotalClients>
        <S.PercentContainer>
          <S.Percents>+14%</S.Percents>
          <S.LastUpdate>desde a ultima semana</S.LastUpdate>
        </S.PercentContainer>
      </S.ContainerWrapper>
    </S.ContainerCard>
  );
};

export default Card;
