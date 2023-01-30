import React from 'react'

export default function Sobre() {
  return (
    <header className="App-header">
        <h1>Sobre</h1>
        <p>{window.location.href}</p>
        <p>{window.location.origin}</p>
        <p>{window.location.pathname}</p>
    </header>
  )
}
