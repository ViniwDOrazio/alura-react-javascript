import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/menu";
import HomePage from "./paginas/homePage";
import NotFound from "./paginas/notFound";
import Sobre from "./paginas/sobre";

function App() {
  // console.log(window.location);
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre/*" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
