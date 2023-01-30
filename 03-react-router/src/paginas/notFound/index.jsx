import React from 'react'

export default function NotFound() {
  return (
    <header className="App-header">
        <h1>Não achei isso ai</h1>
        <p>{window.location.href}</p>
        <p>{window.location.origin}</p>
        <p>{window.location.pathname}</p>
    </header>
  )
}
