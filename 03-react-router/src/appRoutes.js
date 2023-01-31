import Header from "componentes/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./paginas/homePage";
import NotFound from "./paginas/notFound";
import Sobre from "./paginas/sobre";

function AppRoutes() {
  // console.log(window.location);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre/*" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;