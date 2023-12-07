// PrivateRoutes.jsx

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../modules/home";
import UserManager from "../modules/userManager";
import { useAuth } from "../context/AuthContext";
import Login from "../modules/Login";
import Register from "../modules/Register";
import * as S from "../layout/styles/";
import SideBarMenu from "../layout/SideBar";
import Header from "../layout/header";
import Vendas from "../modules/vendas";
import Financeiro from "../modules/finc";

const PrivateRoutes = ({ authenticated }) => {
  const Container = ({ component: Component }) => {
    return (
      <S.Container>
        <SideBarMenu />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            overflowX: "hidden",
          }}
        >
          <Header />
          {<Component />}
        </div>
      </S.Container>
    );
  };

  if (authenticated)
    return (
      <Routes>
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/register" element={<Navigate to="/" />} />
        <Route path="/" element={<Container component={Dashboard} />} />
        <Route path="/vendas" element={<Container component={Vendas} />} />
        <Route
          path="/desempenhopessoal"
          element={<Container component={() => <>desempenhopessoal</>} />}
        />
        <Route
          path="/financeiro"
          element={<Container component={Financeiro} />}
        />
        <Route
          path="/inventarioeestoque"
          element={<Container component={() => <>inventarioeestoque</>} />}
        />
        <Route
          path="/gerenciadordeusuario"
          element={<Container component={UserManager} />}
        />
      </Routes>
    );

  if (!authenticated) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
};

export default PrivateRoutes;
