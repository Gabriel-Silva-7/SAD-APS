import { Route, Routes } from "react-router-dom";
import "../index.css";
import Dashboard from "../modules/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/vendas" element={<>Vendas</>} />
      <Route path="/desempenhopessoal" element={<> Desempenhopessoal </>} />
      <Route path="/financeiro" element={<> financeiro </>} />
      <Route path="/inventarioeestoque" element={<> inventarioeestoque </>} />
    </Routes>
  );
};

export default AppRoutes;
