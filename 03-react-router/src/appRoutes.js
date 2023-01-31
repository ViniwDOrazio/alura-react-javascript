import Header from "componentes/header";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "paginas/Padrao";
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
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
