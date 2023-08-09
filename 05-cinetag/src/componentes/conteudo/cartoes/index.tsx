import iCartao from "./iCartao";
import styles from "./cartoes.module.css"
import Titulo from "componentes/titulo";
import Favoritar from "componentes/favoritar";

type Props = {
  video: iCartao
  aoFavoritar: (video: iCartao) => void; 
}

export default function Cartao({video, aoFavoritar}: Props) {
  return (
    <div key={video.id} className={styles.cartaoContainer}>
        <a href={video.link} target="_blank" rel="noreferrer">
            <img src={video.capa} alt={video.titulo} className={styles.imagemContainer} />
        </a>
        <Titulo><a href={video.link} target="_blank" rel="noreferrer"><h2>{video.titulo}</h2></a></Titulo>

        <Favoritar video={video} aoFavoritar={aoFavoritar} />

    </div>
  )
}
