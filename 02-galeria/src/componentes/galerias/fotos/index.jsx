import Estilos from './fotos.module.scss'
import Tags from '../componentes/tags'
import FotosJSON from './fotos.json'
import ListaCard from '../componentes/listaCards'
import { useState } from 'react'

export default function Fotos() {
  const [itens, setItens] = useState(FotosJSON);
  const tags = [... new Set(FotosJSON.map((foto) => foto.tag))];

  const filtrarFotos = (tag) => {
    const novasFotos = FotosJSON.filter((foto) => {
      return ((foto.tag === tag) || (! tag));
    })
    setItens(novasFotos);
  }

  return (
    <section className={Estilos.galeria}>
      <h2>Navegue meu Camarada</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos}/>
      <ListaCard
        lista={itens}
        estiloLista={Estilos.galeria__listaCards}
        estiloCard={Estilos.galeria__card}
        estiloImagem={Estilos.galeria__imagem}
        estiloDescricao={Estilos.galeria__descricao}/>
    </section>
  )
}