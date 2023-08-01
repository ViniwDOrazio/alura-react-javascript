import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IRestaurante from '../../../interfaces/IRestaurante'

export default function RestaurantesFormulario() {

  const parametros = useParams()
  const [nomeRestaurante, setNomeRestaurante] = useState('')

  const goTo= useNavigate();
  
  useEffect(() => {
    if (parametros.id)
      axios.get<IRestaurante>(`http://localhost:8002/api/v2/restaurantes/${parametros.id}/`)
        .then(resposta => setNomeRestaurante(resposta.data.nome) )
  }, [parametros])

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    if (parametros.id) {
      axios.put(`http://localhost:8002/api/v2/restaurantes/${parametros.id}/`, 
      {nome: nomeRestaurante})
      .then((resposta) => {
        // setNomeRestaurante('')
        console.log("Restaurante atualizado com Sucesso!\nCódigo: " + resposta.data.id + "\nNome: " + resposta.data.nome)
        goTo('/admin/restaurantes/')
      })
    } else {
      axios.post('http://localhost:8002/api/v2/restaurantes/', 
      {nome: nomeRestaurante})
      .then((resposta) => {
        // setNomeRestaurante('')
        console.log("Restaurante cadastrado com Sucesso!\nCódigo: " + resposta.data.id + "\nNome: " + resposta.data.nome)
        goTo('/admin/restaurantes/')
      })
    }
  }

  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField
        value={nomeRestaurante}
        onChange={evento => setNomeRestaurante(evento.target.value)}
        id="nome-restaurante" 
        label="Nome do Restaurante" 
        variant="standard" />
      <Button type="submit" variant="outlined">Salvar</Button>
    </form>
  )
}
