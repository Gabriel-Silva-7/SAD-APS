import AppRoutes from "./routes";
import * as S from "./layout/styles/index";
import SideBarMenu from "./layout/SideBar";
import Header from "./layout/header";
import { MenuProvider } from "./context/MenuContext";
import { useEffect, useState } from "react";
import "./index.css";
import { useAuth } from "./context/AuthContext";

function App({ token }) {
  return (
    <MenuProvider>
      <AppRoutes authenticated={!!token} />
    </MenuProvider>
  );
}

export default App;
