import inicio from './icones/inicio.png'
import maisCurtidas from './icones/maisCurtidas.png'
import maisVistas from './icones/maisVistas.png'
import novas from './icones/novas.png'
import surpreendaMe from './icones/surpreendaMe.png'
import Estilos from './menu.module.scss'

export default function Menu() {
  return (
    <nav className={Estilos.menu}>
        <ul className={Estilos.menu__lista}>
            <li className={Estilos.menu__item}>
                <img src={inicio} alt="" />
                <a href="/">Início</a>
            </li>
            <li className={Estilos.menu__item}>
                <img src={maisCurtidas} alt="" />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={Estilos.menu__item}>
                <img src={maisVistas} alt="" />
                <a href="/">Mais vistas</a>
            </li>
            <li className={Estilos.menu__item}>
                <img src={novas} alt="" />
                <a href="/">Novas</a>
            </li>
            <li className={Estilos.menu__item}>
                <img src={surpreendaMe} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>

    </nav>
  )
}
