import React from 'react'
import { Link } from 'react-router-dom'
import Estilos from './menu.module.css'

export default function Menu() {
  return (
    <header>
        <nav className={Estilos.navegacao} >
          {/* <Link to="/" > TESTE</Link> */}
          {/* <Link to="/">Início</Link>
          <Link to="/sobre"/>Sobre</Link> */}

          <Link className={Estilos.link} to="/">
            Início
          </Link>
          <Link className={Estilos.link} to="/sobre">
            Sobre
          </Link>

          {/* <a className={Estilos.link} href="/">
            Início
          </a>
          <a className={Estilos.link} href="/sobre">
            Sobre
          </a> */}
        </nav>
    </header>
  )
}
