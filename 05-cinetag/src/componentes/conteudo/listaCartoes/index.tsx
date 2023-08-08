import ListaVideos from "api/dados.json"
import style from './listaCartoes.module.css'
import Cartao from "../cartoes"

export default function ListaCartoes() {
  return (
    <section className={style.lista}>
        {ListaVideos.map((video) => <Cartao {...video}  key={video.id} />) }
    </section>
  )
}
