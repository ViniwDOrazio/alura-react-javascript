import { Link } from 'react-router-dom'
import styles from './Link.module.css'

interface LinkCabecalhoProps {
  url: string,
  children: string
}

export default function LinkCabecalho({url, children}:LinkCabecalhoProps) {
  return (
    <Link to={url} className={styles.link} >
      {children}
    </Link>
  )
}
