import Banner from "componentes/cabecalho/banner";
import ListaCartoes from "componentes/conteudo/listaCartoes";
import Titulo from "componentes/titulo";
import style from '../pages.module.css'

interface iPaginaListagem {
  bannerIndex: number
  listarApenasFavoritos: boolean
  titulo: string
}

export default function PaginaListagem({ bannerIndex, listarApenasFavoritos, titulo }: iPaginaListagem) {
  return (
    <>
      <Banner bannerIndex={bannerIndex} />
      <section className={style.baseSection}>
        <Titulo>
          <h1>{titulo}</h1>
        </Titulo>
        <ListaCartoes listarApenasFavoritos={listarApenasFavoritos} />
      </section>
    </>

  )
}
