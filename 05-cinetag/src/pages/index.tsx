import Cabecalho from 'componentes/cabecalho'
import Rodape from 'componentes/rodape'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
  return (
    <>
      <Cabecalho />
      <Outlet/>
      <Rodape />
    </>
  )
}
