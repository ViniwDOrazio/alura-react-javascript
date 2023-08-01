import { useEffect, useState } from "react"
import IPrato from "../../../interfaces/IPrato"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { httpAdmin } from "../../../http";

export default function AdminisracaoPratos() {
  const goTo= useNavigate();

  const [pratos, setPratos] = useState<IPrato[]>([])
  const URL_API = 'pratos/'

  const CarregarConteudoPagina = () => {
    httpAdmin.get<IPrato[]>(URL_API)
      .then(resposta => {
        setPratos(resposta.data)
      })
      .catch(error => { console.log(error) })
  }

  const DeleteRestaurante = (restauranteExcluir: IPrato) => {
    httpAdmin.delete(`pratos/${restauranteExcluir.id}/`)
      .then(() => {
        const listaFiltrada = pratos.filter(restaurante => restaurante !== restauranteExcluir) 
        setPratos([...listaFiltrada])
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
              Tag
            </TableCell>
            <TableCell>
              Imagem
            </TableCell>
            <TableCell>
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pratos.map(prato =>
            <TableRow key={prato.id}>
              <TableCell>
                {prato.id}
              </TableCell>
              <TableCell>
                {prato.nome}
              </TableCell>
              <TableCell>
                {prato.tag}
              </TableCell>
              <TableCell>
                <a href={prato.imagem} target="_blank" rel="noreferrer">ver</a>
                
              </TableCell>

              <TableCell>
                {/* [<Link to={`/admin/pratos/${restaurante.id}`}>Editar</Link> | <Link to={`/admin/pratos/${restaurante.id}`}>Excluir</Link>] */}
                <Button variant="outlined" onClick={() => {goTo(`/admin/pratos/${prato.id}`)}}>Editar</Button>
                <Button variant="outlined" color="error" onClick={() => DeleteRestaurante(prato)}>Excluir</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}