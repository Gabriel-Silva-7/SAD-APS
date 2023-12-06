import React from "react";
import * as S from "./styles";
import { Divider } from "@mui/material";
import { useAuth } from "../../../../context/AuthContext";

const Header = () => {
  const { userData } = useAuth();

  return (
    <S.Container>
      <S.TitleAndDescriptionContainer>
        <S.Title>Gerenciador de perfis</S.Title>
        <S.Description>
          Aqui você pode gerenciar o seu perfil e dos seus colaboradores. 😁
        </S.Description>
      </S.TitleAndDescriptionContainer>
    </S.Container>
  );
};

export default Header;
