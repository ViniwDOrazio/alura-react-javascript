import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}/>
      </Routes>
    </BrowserRouter>
  )
}
