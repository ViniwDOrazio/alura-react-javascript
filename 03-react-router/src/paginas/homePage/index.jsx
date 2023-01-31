import CardPostagem from 'componentes/cardPostagem'
import Estilos from './homePath.module.css'
import listaPostagens from './listaPostagens.json'

export default function HomePage() {
  return (
    <ul className={Estilos.posts}>
      {listaPostagens.map((postagem) => (
        <li key={postagem.id}><CardPostagem post={postagem} /></li>
      ))}
    </ul>
  )
}
