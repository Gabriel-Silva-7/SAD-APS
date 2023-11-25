import AppRoutes from "./routes";
import * as S from "./layout/styles/index";
import SideBarMenu from "./layout/SideBar";
import Header from "./layout/header";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <MenuProvider>
      <S.Container>
        <SideBarMenu />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Header />
          <AppRoutes />
        </div>
      </S.Container>
    </MenuProvider>
  );
}

export default App;
