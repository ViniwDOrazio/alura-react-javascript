import Botao from 'componentes/botao';
import { Link } from 'react-router-dom'
import Estilos from './cartaoArtigos.module.css'

export default function CartaoArtigos({post}) {
  const url = `${window.origin}/artigo/${post.id}/${post.titulo.replaceAll(" ", "-").replaceAll(":", "-").replaceAll("--", "-").replaceAll("?", "").replaceAll("!", "").toLowerCase()}`;
  return (
    <Link to={url}>
      <div className={Estilos.post}>
          <img className={Estilos.capa} src={`/assets/capas/${post.id}/capa.png`} alt={`Capa do ${post.titulo}`}/>
          <h2 className={Estilos.titulo}>{post.titulo}</h2>
          <Botao>Ler</Botao>
      </div>
    </Link>
  )
}
