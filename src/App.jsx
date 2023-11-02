import AppRoutes from "./routes";
import * as S from "./layout/styles/index";
import SideBarMenu from "./layout/SideBar";

function App() {
  return (
    <S.Container>
      <SideBarMenu />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>header</div>
        <AppRoutes />
      </div>
    </S.Container>
  );
}

export default App;
