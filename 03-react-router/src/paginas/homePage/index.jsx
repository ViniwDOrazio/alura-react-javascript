import React from 'react'

export default function HomePage() {
  return (
    <header className="App-header">
        <h1>Início</h1>
        <p>{window.location.href}</p>
        <p>{window.location.origin}</p>
        <p>{window.location.pathname}</p>
    </header>
  )
}
