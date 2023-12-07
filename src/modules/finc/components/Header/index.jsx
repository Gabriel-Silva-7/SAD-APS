import React, { useState } from "react";
import * as S from "./styles";
import SelectComponent from "../Select";

const Header = (props) => {
  return (
    <S.Container>
      <S.TitleAndDescriptionContainer>
        <S.Title>Financeiro</S.Title>
        <S.Description>Dashboard de desempenho financeiro. 💰💸</S.Description>
      </S.TitleAndDescriptionContainer>
      <S.DateContainer>
        <SelectComponent
          selectedOption={props.selectedOption}
          setSelectedOption={props.setSelectedOption}
        />
      </S.DateContainer>
    </S.Container>
  );
};

export default Header;
