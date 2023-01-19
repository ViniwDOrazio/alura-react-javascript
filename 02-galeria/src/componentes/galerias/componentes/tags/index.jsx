import Estilos from './tags.module.scss'

export default function Tags({tags, filtrarFotos}) {
  return (
    <div className={Estilos.tags}>
      <p>Tags:</p>
      <ul className={Estilos.tags__lista}>
        {tags.map(tag => {
            return <li key={tag} onClick={()=>filtrarFotos(tag)}>{tag}</li>
          })}
        <li key="Todas" onClick={()=>filtrarFotos()}>Todas</li>
      </ul>
    </div>
  )
}
