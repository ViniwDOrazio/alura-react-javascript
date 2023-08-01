import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function AdminisracaoRestaurantes() {
  const goTo= useNavigate();

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const URL_API = 'http://localhost:8002/api/v2/restaurantes/'

  const CarregarConteudoPagina = () => {
    axios.get<IRestaurante[]>(URL_API)
      .then(resposta => {
        setRestaurantes(resposta.data)
      })
      .catch(error => { console.log(error) })
  }

  const DeleteRestaurante = (restauranteExcluir: IRestaurante) => {
    axios.delete(`http://localhost:8002/api/v2/restaurantes/${restauranteExcluir.id}/`)
      .then(() => {
        const listaFiltrada = restaurantes.filter(restaurante => restaurante !== restauranteExcluir) 
        setRestaurantes([...listaFiltrada])
      })
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
            <TableCell>
              Ações
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
              <TableCell>
                
                {/* [<Link to={`/admin/restaurantes/${restaurante.id}`}>Editar</Link> | <Link to={`/admin/restaurantes/${restaurante.id}`}>Excluir</Link>] */}
                <Button variant="outlined" onClick={() => {goTo(`/admin/restaurantes/${restaurante.id}`)}}>Editar</Button>
                <Button variant="outlined" color="error" onClick={() => DeleteRestaurante(restaurante)}>Excluir</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}