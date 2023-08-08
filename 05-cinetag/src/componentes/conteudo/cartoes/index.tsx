import iCartao from "./iCartao";
import styles from "./cartoes.module.css"
import Titulo from "componentes/titulo";
import Favoritar from "componentes/favoritar";

export default function Cartao({id, titulo, capa, link, favoritado= false}: iCartao) {
  return (
    <div key={id} className={styles.cartaoContainer}>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={capa} alt={titulo} className={styles.imagemContainer} />
        </a>
        <Titulo><a href={link} target="_blank" rel="noreferrer"><h2>{titulo}</h2></a></Titulo>

        <Favoritar selecionado={favoritado} />

    </div>
  )
}
