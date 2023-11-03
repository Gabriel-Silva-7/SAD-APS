import { Route, Routes } from "react-router-dom";
import "../index.css";
import Dashboard from "../modules/home";
import UserManager from "../modules/userManager";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/vendas" element={<>Vendas</>} />
      <Route path="/desempenhopessoal" element={<> Desempenhopessoal </>} />
      <Route path="/financeiro" element={<> financeiro </>} />
      <Route path="/inventarioeestoque" element={<> inventarioeestoque </>} />
      <Route path="/gerenciadordeusuario" element={<UserManager />} />
    </Routes>
  );
};

export default AppRoutes;
