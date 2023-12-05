import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import * as S from "./styles";
import newLogo from "../../assets/newlogo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://aps-api.onrender.com/register",
        userData
      );

      if (response.status === 200)
        setTimeout(() => {
          navigate("/login");
          window.location.reload();
        }, 2000);

      setPasswordsMatch(true);
    } catch (error) {}
  };

  return (
    <S.Container>
      <S.Logo src={newLogo} />
      <S.RegisterWrapper>
        <S.RegisterTitle>Cadastro</S.RegisterTitle>
        <S.RegisterForm onSubmit={handleSubmit}>
          <S.InputField
            type="text"
            name="username"
            placeholder="Nome de Usuário"
            value={userData.username}
            onChange={handleChange}
          />
          <S.InputField
            type="email"
            name="email"
            placeholder="E-mail"
            value={userData.email}
            onChange={handleChange}
          />
          <S.InputField
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={userData.phone}
            onChange={handleChange}
          />
          <S.InputField
            type="password"
            name="password"
            placeholder="Senha"
            value={userData.password}
            onChange={handleChange}
          />
          <S.InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
          {!passwordsMatch && <S.ErrorMsg>As senhas não coincidem</S.ErrorMsg>}
          <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
        </S.RegisterForm>
      </S.RegisterWrapper>
    </S.Container>
  );
};

export default Register;
