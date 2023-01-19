import Estilos from './fotos.module.scss'
import Tags from '../componentes/tags'
import FotosJSON from './fotos.json'
import ListaCard from '../componentes/listaCards'

export default function Fotos() {
  return (
    <section className={Estilos.galeria}>
      <h2>Navegue meu Camarada</h2>
      <Tags />
      <ListaCard
        lista={FotosJSON}
        estiloLista={Estilos.galeria__listaCards}
        estiloCard={Estilos.galeria__card}
        estiloImagem={Estilos.galeria__imagem}
        estiloDescricao={Estilos.galeria__descricao}/>
    </section>
  )
}