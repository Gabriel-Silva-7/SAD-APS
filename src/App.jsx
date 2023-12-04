import AppRoutes from "./routes";
import * as S from "./layout/styles/index";
import SideBarMenu from "./layout/SideBar";
import Header from "./layout/header";
import { MenuProvider } from "./context/MenuContext";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  return (
    <MenuProvider>
      <AppRoutes />
    </MenuProvider>
  );
}

export default App;
