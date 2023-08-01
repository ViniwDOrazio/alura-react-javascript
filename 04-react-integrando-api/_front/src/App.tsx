import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdminisracaoRestaurantes from './paginas/Administracao/Restautantes';
import RestaurantesFormulario from './paginas/Administracao/Restautantes/Formulario';
import PaginaBaseAdmin from './paginas/Administracao';
import AdminisracaoPratos from './paginas/Administracao/Pratos';
import PratosFormulario from './paginas/Administracao/Pratos/Formulario';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin" element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<AdminisracaoRestaurantes />} />
        <Route path="restaurantes/novo" element={<RestaurantesFormulario />} />
        <Route path="restaurantes/:id" element={<RestaurantesFormulario />} />

        <Route path="pratos" element={<AdminisracaoPratos />} />
        <Route path="pratos/novo" element={<PratosFormulario />} />
        <Route path="pratos/:id" element={<PratosFormulario />} />
      </Route>

    </Routes>
  );
}

export default App;
