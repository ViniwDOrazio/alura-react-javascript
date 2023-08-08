import Logo from "./Logo.png"
import styles from './Cabecalho.module.css'
import { Link } from 'react-router-dom'
import LinkCabecalho from "./link"

export default function Cabecalho() {
  return (
  <header className={styles.cabecalho}>
    <Link to='./'>
      <img src={Logo} alt='cinetag' />
    </Link>
    <nav>
    <LinkCabecalho url="./">Home</LinkCabecalho>
    <LinkCabecalho url="./Favoritos">Favoritos</LinkCabecalho>
    </nav>
  </header>
  )
}


