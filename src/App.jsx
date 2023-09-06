import SidebarMenu from "./modules/Menu";
import AppRoutes from "./routes";
import * as S from "./styles/index";

function App() {
  return (
    <S.Container>
      <SidebarMenu />
      <AppRoutes />
    </S.Container>
  );
}

export default App;
