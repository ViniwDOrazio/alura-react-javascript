import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Estilos from './menu.module.css'
import listaLink from './listaItensMenu.json'

export default function Menu() {
  // var paginaAtual = useLocation().pathname;
  return (
  <header>
    <nav className={Estilos.navegacao} >
      {listaLink.map((item) => {
          return (
            <NavLink key={item.Referencia} className={({ isActive }) => `${Estilos.link} ${isActive? Estilos.linkSelecionado: ""}`} to={item.Referencia} end>
              {item.Texto}
            </NavLink>
            // <Link key={item.Referencia} className={item.Referencia === paginaAtual ? Estilos.linkSelecionado : Estilos.link} to={item.Referencia}>
            //  {item.Texto}
            // </Link>
          )
        })
      }
    </nav>
  </header>
  )
}
