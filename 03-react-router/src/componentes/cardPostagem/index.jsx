import Estilos from './cardPostagem.module.css'

export default function CardPostagem({post}) {
  return (
    <div className={Estilos.post}>
        <img className={Estilos.capa} src={`/assets/capas/${post.id}/capa.png`} alt={`Capa do ${post.titulo}`}/>
        <h2 className={Estilos.titulo}>{post.titulo}</h2>
        <button className={Estilos.botaoLer}>Ler</button>    
    </div>
  )
}
