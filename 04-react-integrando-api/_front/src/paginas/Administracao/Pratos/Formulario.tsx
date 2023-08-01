import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IRestaurante from '../../../interfaces/IRestaurante'
import { httpAdmin } from '../../../http'
import ITag from '../../../interfaces/ITag'
import { Method } from 'axios'
import IPrato from '../../../interfaces/IPrato'

export default function PratosFormulario() {

  const parametros = useParams()
  const [nomePrato, setNomePrato] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tag, setTag] = useState('')
  const [restaurante, setRestaurante] = useState('')
  const [imagem, setImagem] = useState<File | null>(null)

  const [tags, setTags] = useState<ITag[]>([])
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  const goTo = useNavigate();

  useEffect(() => {
    httpAdmin.get<{ tags: ITag[] }>(`tags/`)
      .then(resposta => setTags(resposta.data.tags))

    httpAdmin.get<IRestaurante[]>(`restaurantes/`)
      .then(resposta => setRestaurantes(resposta.data))


    if (parametros.id)
      httpAdmin.get<IPrato>(`pratos/${parametros.id}/`)
        .then(
          resposta => {
            setNomePrato(resposta.data.nome)
            setDescricao(resposta.data.descricao)
            setTag(resposta.data.tag)
            setRestaurante(String(resposta.data.restaurante))
            setImagem(null)
        })
  }, [])

  const AoSelecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
    if (evento.target.files?.length) {
      setImagem(evento.target.files[0])
    } else {
      setImagem(null)
    }
  }

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const formData = new FormData();
    formData.append('nome', nomePrato)
    formData.append('descricao', descricao)
    formData.append('tag', tag)
    formData.append('restaurante', restaurante)
    if (imagem) {
      formData.append('imagem', imagem)
    }

    console.log(formData)

    let url = '/pratos/'
    let method: Method = 'POST'
    if (parametros.id) {
      method = 'PUT'
      url += `${parametros.id}/`
    }
    
    console.log(
    httpAdmin.request({
      url,
      method,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then((resposta) => {
        console.log("Prato Inserido!\n: " + resposta.data.id)
        // console.log(resposta.data)
        goTo('/admin/pratos/')
      })
      .catch((erro) => console.log(erro))
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
      <Typography component="h1" variant="h6">Formulario Prato </Typography>
      <Box component="form" onSubmit={aoSubmeterForm} sx={{ width: "100%" }}>

        <TextField
          value={nomePrato}
          onChange={evento => setNomePrato(evento.target.value)}
          id="nome-prato"
          label="Nome do Prato"
          variant="standard"
          fullWidth
          required
          margin='dense' />

        <TextField
          value={descricao}
          onChange={evento => setDescricao(evento.target.value)}
          id="descricao"
          label="Descrição"
          variant="standard"
          fullWidth
          required
          margin='dense' />

        <FormControl margin='dense' fullWidth >
          <InputLabel id="select-tag">Tag</InputLabel>
          <Select labelId="select-tag"
            value={tag}
            onChange={evento => setTag(evento.target.value)}>
            {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>{tag.value}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl margin='dense' fullWidth >
          <InputLabel id="select-restaurante">Restaurante</InputLabel>
          <Select labelId="select-restaurante"
            value={restaurante}
            onChange={(evento) => setRestaurante(evento.target.value)}>
            {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>{restaurante.nome}</MenuItem>)}
          </Select>
        </FormControl>

        <input type='file'
          onChange={AoSelecionarArquivo}
        />

        <Button
          type="submit"
          variant="outlined"
          sx={{ marginTop: 1 }}
          fullWidth>Salvar</Button>
      </Box>
    </Box>

  )
}
