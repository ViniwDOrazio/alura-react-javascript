import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import PaginaBase from 'pages/PaginaBase';

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Inicio bannerIndex={1} listarApenasFavoritos={false} titulo="Lista de Filmes" />}/>
        <Route path='/favoritos' element={<Inicio bannerIndex={2} listarApenasFavoritos={true} titulo="Favoritos" />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}
