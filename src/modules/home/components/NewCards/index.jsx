import React from "react";
import * as S from "./styles";

const Card = (props) => {
  console.log(props);
  return (
    <S.ContainerCard>
      <S.ContainerWrapper>
        <S.Header>
          <div>{props.title && props.title}</div>
          <S.Date>{props.date && props.date}</S.Date>
        </S.Header>
        <S.TotalClients>{props?.total}</S.TotalClients>
        <S.PercentContainer>
          <S.Percents>+{props?.percent}%</S.Percents>
          <S.LastUpdate>desde a ultima semana</S.LastUpdate>
        </S.PercentContainer>
      </S.ContainerWrapper>
    </S.ContainerCard>
  );
};

export default Card;
