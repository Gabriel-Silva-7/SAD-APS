import React, { useState } from "react";
import * as S from "./styles";
import { Divider } from "@mui/material";
import { useAuth } from "../../../../context/AuthContext";
import SelectComponent from "../Select";

const Header = (props) => {
  const { userData } = useAuth();

  return (
    <S.Container>
      <S.TitleAndDescriptionContainer>
        <S.Title>Dashboard Analítico</S.Title>
        <S.Description>Bem vindo(a) de volta {userData.nome}. 👋</S.Description>
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
