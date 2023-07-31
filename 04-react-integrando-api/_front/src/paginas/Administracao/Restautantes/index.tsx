import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"

export default function AdminisracaoRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [URLAPIRestaurantes, setURLAPIRestaurantes] = useState('http://localhost:8002/api/v2/restaurantes/')


  const CarregarConteudoPagina = () => {
    axios.get<IRestaurante[]>(URLAPIRestaurantes)
      .then(resposta => {
        setRestaurantes([...restaurantes, ...resposta.data])
      })
      .catch(error => { console.log(error) })
  }

  useEffect(() => {
    CarregarConteudoPagina()
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Codigo
            </TableCell>
            <TableCell>
              Nome
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map(restaurante =>
            <TableRow key={restaurante.id}>
              <TableCell>
                {restaurante.id}
              </TableCell>
              <TableCell>
                {restaurante.nome}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>


    </TableContainer>
  )
}