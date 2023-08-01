import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IRestaurante from '../../../interfaces/IRestaurante'
import { httpAdmin } from '../../../http'

export default function RestaurantesFormulario() {

  const parametros = useParams()
  const [nomeRestaurante, setNomeRestaurante] = useState('')

  const goTo= useNavigate();
  
  useEffect(() => {
    if (parametros.id)
      httpAdmin.get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then(resposta => setNomeRestaurante(resposta.data.nome) )
  }, [parametros])

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    if (parametros.id) {
      httpAdmin.put(`restaurantes/${parametros.id}/`, 
      {nome: nomeRestaurante})
      .then((resposta) => {
        // setNomeRestaurante('')
        console.log("Restaurante atualizado com Sucesso!\nCódigo: " + resposta.data.id + "\nNome: " + resposta.data.nome)
        goTo('/admin/restaurantes/')
      })
    } else {
      httpAdmin.post('restaurantes/', 
      {nome: nomeRestaurante})
      .then((resposta) => {
        // setNomeRestaurante('')
        console.log("Restaurante cadastrado com Sucesso!\nCódigo: " + resposta.data.id + "\nNome: " + resposta.data.nome)
        goTo('/admin/restaurantes/')
      })
    }
  }

  return (
    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Typography component="h1" variant="h6">Formulario Restaurante </Typography>
      <Box component="form" onSubmit={aoSubmeterForm}>
        
        <TextField
          value={nomeRestaurante}
          onChange={evento => setNomeRestaurante(evento.target.value)}
          id="nome-restaurante" 
          label="Nome do Restaurante" 
          variant="standard" 
          fullWidth
          required/>
        <Button 
          type="submit" 
          variant="outlined"
          sx={{marginTop: 1}}
          fullWidth>Salvar</Button>
      </Box>
    </Box>
  )
}
