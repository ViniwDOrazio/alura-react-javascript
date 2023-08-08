import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Favoritos from 'pages/favoritos';
import PaginaBase from 'pages/PaginaBase';

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Inicio />}/>
        <Route path='/favoritos' element={<Favoritos />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}
