import iFavoritar from "./iFavoritar";
import marcado from './icones/favorite-selecionado.png'
import desmarcado from './icones/favorite.png'
import styles from "./favoritar.module.css"

export default function Favoritar({selecionado}: iFavoritar) {  
    let tituloMarcado = "Favoritar"
    let imagemSelecionado = desmarcado

    if (selecionado)
    {
        imagemSelecionado = marcado
        tituloMarcado = "Remover Marcação"
    }

  return (
    <img className={styles.favoritar} src={imagemSelecionado} alt={tituloMarcado}/>
  )
}
