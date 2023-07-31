import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdminisracaoRestaurantes from './paginas/Administracao/Restautantes';
import RestaurantesFormularioNovo from './paginas/Administracao/Restautantes/FormularioNovo';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdminisracaoRestaurantes />} />
      <Route path="/admin/restaurantes/novo" element={<RestaurantesFormularioNovo />} />
    </Routes>
  );
}

export default App;
