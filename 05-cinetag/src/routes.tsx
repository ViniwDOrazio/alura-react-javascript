import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaListagem from './pages/paginaListagem';
import PaginaBase from 'pages';

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<PaginaListagem bannerIndex={1} listarApenasFavoritos={false} titulo="Lista de Filmes" />}/>
        <Route path='/favoritos' element={<PaginaListagem bannerIndex={2} listarApenasFavoritos={true} titulo="Favoritos" />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}
