import iCartao from "./iCartao";
import styles from "./cartoes.module.css"
import Titulo from "componentes/titulo";
import Favoritar from "componentes/favoritar";
import { Link } from "react-router-dom";

type Props = {
  video: iCartao
  aoFavoritar: (video: iCartao) => void; 
}

export default function Cartao({video, aoFavoritar}: Props) {
  return (
    <div key={video.id} className={styles.cartaoContainer}>
        <Link to={`/player/${video.id}`}>
          <img src={video.capa} alt={video.titulo} className={styles.imagemContainer} />
          <Titulo><h2>{video.titulo}</h2></Titulo>
        </Link>

        <Favoritar video={video} aoFavoritar={aoFavoritar} />

    </div>
  )
}
