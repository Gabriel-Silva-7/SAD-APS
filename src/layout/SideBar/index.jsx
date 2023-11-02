import React from "react";
import Logo from "./components/logo";
import MenuList from "./components/MenuList";
import { useState } from "react";
import * as S from "../styles/index";

const SideBarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ background: "#001529" }}>
      <S.StyledSider
        collapsed={collapsed}
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
