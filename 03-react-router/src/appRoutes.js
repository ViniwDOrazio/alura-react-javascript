import Header from "componentes/header";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/scrollToTop";
import Artigo from "paginas/artigo";
import PaginaPadrao from "paginas/Padrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaArtigos from "./paginas/listaArtigos";
import NotFound from "./paginas/notFound";
import Sobre from "./paginas/sobre";

function AppRoutes() {
  // console.log(window.location);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<ListaArtigos />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
        <Route path="artigo/:id/:titulo" element={<Artigo />} />
        <Route path="artigo/:id" element={<Artigo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
