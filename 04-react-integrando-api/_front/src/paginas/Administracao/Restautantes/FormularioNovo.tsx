import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function RestaurantesFormularioNovo() {

  const [nomeRestaurante, setNomeRestaurante] = useState('')

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    axios.post('http://localhost:8002/api/v2/restaurantes/', 
      {nome: nomeRestaurante})
      .then((resposta) => {
        setNomeRestaurante('')
        alert("Restaurante cadastrado com Sucesso!\nCódigo: " + resposta.data.id + "\nNome: " + resposta.data.nome)
      })
  }

  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField
        onChange={evento  => setNomeRestaurante(evento.target.value)}
        id="nome-restaurante" label="Nome do Restaurante" variant="standard" />
      <Button type="submit" variant="outlined">Salvar</Button>
    </form>
  )
}
