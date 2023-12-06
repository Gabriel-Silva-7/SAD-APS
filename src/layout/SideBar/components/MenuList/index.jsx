import { Menu } from "antd";
import {
  HouseSimple,
  ChartBarHorizontal,
  ChartLineUp,
  Money,
  Archive,
} from "@phosphor-icons/react";
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router";

const MenuList = () => {
  const { Item, Divider } = Menu;
  const nav = useNavigate();
  return (
    <S.StyledMenu theme="light" mode="inline">
      <Item key="Home" icon={<HouseSimple size={20} />}>
        <a onClick={() => nav("/")}>Dashboard</a>
      </Item>
      <Divider />
      <Item key="Vendas" icon={<ChartBarHorizontal size={20} />}>
        <a onClick={() => nav("/vendas")}>Vendas</a>
      </Item>
      <Divider />
      <Item key="Financeiro" icon={<Money size={20} />}>
        <a onClick={() => nav("/financeiro")}>Financeiro</a>
      </Item>
      <Divider />
      <Item key="Inventario&Estoque" icon={<Archive size={20} />}>
        <a onClick={() => nav("/inventarioeestoque")}>Inventario e Estoque</a>
      </Item>
      <Divider />
      <Item key="GerneciadorDeUsuario" icon={<Archive size={20} />}>
        <a onClick={() => nav("/gerenciadordeusuario")}>
          Gerenciador de Usuário
        </a>
      </Item>
      <Divider />
    </S.StyledMenu>
  );
};

export default MenuList;
