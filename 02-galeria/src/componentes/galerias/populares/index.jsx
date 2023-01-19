import Estilos from './populares.module.scss'
import FotosJSON from './populares.json'
import ListaCard from '../componentes/listaCards'
import Botao from 'componentes/botao'

export default function Populares() {
  return (
    <div>
    <aside className={Estilos.galeria}>
      <h2>Populares</h2>
      <ListaCard
        lista={FotosJSON}
        estiloLista={Estilos.galeria__listaCards}/>
        <Botao>Ver mais fotos</Botao>
    </aside>
    </div>
  )
}
