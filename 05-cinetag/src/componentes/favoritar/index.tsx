import marcado from './icones/favorite-selecionado.png'
import desmarcado from './icones/favorite.png'
import styles from "./favoritar.module.css"
import iCartao from 'componentes/conteudo/cartoes/iCartao'

type Props = {
  video: iCartao
  aoFavoritar: (video: iCartao) => void; 
}

export default function Favoritar({video, aoFavoritar}: Props) {  
    let tituloMarcado = "Favoritar"
    let imagemSelecionado = desmarcado

    if (video.favoritado)
    {
        imagemSelecionado = marcado
        tituloMarcado = "Remover Marcação"
    }

  return (
    <img className={styles.favoritar} src={imagemSelecionado} alt={tituloMarcado} onClick={() => aoFavoritar(video)}/>
  )
}
