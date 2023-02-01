import CartaoArtigos from 'componentes/cartaoArtigos'
import Estilos from './homePath.module.css'
import listaPostagens from 'assets/listaPostagens.json'

export default function HomePage() {
  return (
    <ul className={Estilos.posts}>
      {listaPostagens.map((postagem) => (
        <li key={postagem.id}><CartaoArtigos post={postagem} /></li>
      ))}
    </ul>
  )
}
