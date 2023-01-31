import Banner from 'componentes/banner'
import Menu from 'componentes/menu'
import React from 'react'

export default function Header() {
  return (
    <header>
        <Menu />
        <Banner />
    </header>
  )
}