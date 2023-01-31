import Estilos from './postagem.module.css'


export default function Postagem({children, fotoCapa, titulo}) {
    console.log(Estilos);
  return (
    <article className={Estilos.postModeloContainer}>
        <div className={Estilos.fotoCapa} style={{backgroundImage: `url(${fotoCapa})`}}></div>
        <h2 className={Estilos.titulo}>
            {titulo}
        </h2>
        <div className={Estilos.postConteudoContainer}>
            {children} 
        </div>
    </article>
  )
}
