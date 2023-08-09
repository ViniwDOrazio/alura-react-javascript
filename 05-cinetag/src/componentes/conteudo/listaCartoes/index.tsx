import ListaVideos from "api/dados.json"
import style from './listaCartoes.module.css'
import Cartao from "../cartoes"
import { useEffect, useState } from "react";
import iCartao from "../cartoes/iCartao";

type PropsListagem ={
  listarApenasFavoritos: boolean
}

export default function ListaCartoes({listarApenasFavoritos}: PropsListagem) {
  const [ListaVideosFav, setListaVideosFav] = useState<iCartao[]>([]);

  const CarregarConteudoPagina = () => {
    setListaVideosFav(ListaVideos.map((video) => Object.assign(video, {'favoritado': false})))
  }
  useEffect(() => {
    CarregarConteudoPagina()
  }, []);

  function aoFavoritar(videoFavoritar: iCartao) {
    console.log(videoFavoritar)
    setListaVideosFav(ListaVideosFav.map(video => {
      if(video.id === videoFavoritar.id) {
        video.favoritado = ! video.favoritado; 
      }
      return video;
    }))
    console.log(ListaVideosFav)
  }
  
  let Listar = ListaVideosFav.filter((video)=>((video.favoritado) || (!listarApenasFavoritos)))

  return (
    <section className={style.lista}>
        {/* {Listar.map((video) => <Cartao {...video}  key={video.id} aoFavoritar={aoFavoritar}/>) }   // }*/}
        {Listar.map((video) => <Cartao video={video}  key={video.id} aoFavoritar={aoFavoritar} />) }
    </section>
  )
}
