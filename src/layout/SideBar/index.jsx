import React from "react";
import Logo from "./components/logo";
import MenuList from "./components/MenuList";
import { useState } from "react";
import * as S from "../styles/index";
import { useMenu } from "../../context/MenuContext";

const SideBarMenu = () => {
  const { collapsedMenu, setCollapsedMenu } = useMenu();

  return (
    <div
      style={{
        background: "#001529",
      }}
    >
      <S.StyledSider
        collapsed={collapsedMenu}
        trigger={null}
        collapsible
        theme="light"
      >
        <Logo />
        <MenuList />
      </S.StyledSider>
    </div>
  );
};

export default SideBarMenu;
