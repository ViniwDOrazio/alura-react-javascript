import Estilos from './tags.module.scss'

export default function Tags() {
  return (
    <div className={Estilos.tags}>
        <p>Tags:</p>
        <ul className={Estilos.tags__lista}>
            <li>Estrelas</li>
            <li>Galáxias</li>
            <li>Lua</li>
            <li>Planetas</li>
        </ul>
    </div>
  )
}
