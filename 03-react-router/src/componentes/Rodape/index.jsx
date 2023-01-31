import Estilos from './rodape.module.css'
import { ReactComponent as Marca } from './marca.svg';

export default function Rodape() {
  return (
    <footer className={Estilos.rodape}>
        <Marca width={24}/> <p>Desenvolvido por Viniw</p>
    </footer>
  )
}
