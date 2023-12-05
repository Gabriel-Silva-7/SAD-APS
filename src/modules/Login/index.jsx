import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import newLogo from "../../assets/newlogo.png";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    rememberLogin: false,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userData.email || !userData.password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(
        "https://gastronom.azurewebsites.net/login",
        userData,
        {
          "Content-Type": "application/json",
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);
      } else {
        setError("Credenciais inválidas");
      }
    } catch (error) {
      setError("Erro ao realizar login");
    }
  };

  return (
    <S.Container>
      <S.Logo src={newLogo} />
      <S.LoginWrapper>
        <S.LoginTitle>Login</S.LoginTitle>
        {error && <S.ErrorMsg>{error}</S.ErrorMsg>}
        <S.LoginForm onSubmit={handleSubmit}>
          <S.InputField
            type="text"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <S.InputField
            type="password"
            name="password"
            placeholder="Senha"
            value={userData.password}
            onChange={handleInputChange}
          />
          <S.RememberLoginWrapper>
            <S.RememberLoginCheckbox
              type="checkbox"
              name="rememberLogin"
              checked={userData.rememberLogin}
              onChange={handleInputChange}
            />
            <S.RememberLoginLabel>Manter Login</S.RememberLoginLabel>
          </S.RememberLoginWrapper>
          <S.SubmitButton type="submit">Login</S.SubmitButton>
        </S.LoginForm>
      </S.LoginWrapper>
    </S.Container>
  );
};

export default Login;
