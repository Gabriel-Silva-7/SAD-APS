import React from "react";
import * as S from "./styles";
import { Divider } from "@mui/material";
import { useMenu } from "../../context/MenuContext";
import AccountPopover from "./components/accountPopover";

const Header = () => {
  const { collapsedMenu, setCollapsedMenu } = useMenu();
  return (
    <S.Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "95%",
          height: 59,
          justifyContent: "flex-end",
          alignItems: "center",
          marginLeft: 20,
        }}
      >
        {/* <button onClick={() => setCollapsedMenu(!collapsedMenu)}>menu</button> */}
        <AccountPopover />
      </div>
      <Divider style={{ width: "100%", height: 1 }} />
    </S.Container>
  );
};

export default Header;
