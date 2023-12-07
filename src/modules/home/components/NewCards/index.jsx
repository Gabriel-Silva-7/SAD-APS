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
        <S.TotalClients>
          <div>{props?.total}</div>
          {props.prato && (
            <div style={{ fontSize: 14 }}>Prato: {props.prato}</div>
          )}
          {props.filial && (
            <div style={{ fontSize: 14 }}>Filial: {props.filial}</div>
          )}
        </S.TotalClients>
        <S.PercentContainer>
          {props.percent && (
            <S.Percents>
              +{props?.percent && props?.percent.toFixed(2)}%
            </S.Percents>
          )}
          <S.LastUpdate>desde a ultima semana</S.LastUpdate>
        </S.PercentContainer>
      </S.ContainerWrapper>
    </S.ContainerCard>
  );
};

export default Card;
