import { Navigate, Outlet, Route, Routes } from "react-router-dom";


import App from "./App";
import Home from "./pages/home";
import Clients from "./pages/clients";
import Cobranca from "./pages/cobranca";

function ProtectedRoutes(redirectTo) {
  const token = getItem("token");

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/home" element={< Home />} />
        <Route path="/clients" element={< Clients />} />
        <Route path="/cobrancas" element={< Cobranca />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
