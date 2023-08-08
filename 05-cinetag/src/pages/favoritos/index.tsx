import Banner from "componentes/cabecalho/banner";
import ListaCartoes from "componentes/conteudo/listaCartoes";
import Titulo from "componentes/titulo";

export default function Favoritos() {
  return (
    <>
      <Banner bannerIndex={2} />
      <Titulo>
        <h1>Favoritados</h1>
      </Titulo>
      <ListaCartoes />
    </>
  )
}
