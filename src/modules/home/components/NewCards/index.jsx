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
        <S.TotalClients>{props?.total}</S.TotalClients>
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
