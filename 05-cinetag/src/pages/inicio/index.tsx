import Banner from "componentes/cabecalho/banner";
import ListaCartoes from "componentes/conteudo/listaCartoes";
import Titulo from "componentes/titulo";

export default function Inicio() {
  return (
    <>
      <Banner bannerIndex={1} />
      <Titulo>
        <h1>Lista de Filmes</h1>
      </Titulo>
      <ListaCartoes />
    </>
    
  )
}
