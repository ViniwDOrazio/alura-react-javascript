import Card from './card.jsx'

export default function ListaCard({lista, estiloLista, estiloCard, estiloImagem, estiloDescricao}) {
  return (
    <ul className={estiloLista}>
        {lista.map((foto)=>{
            return(
              <Card 
                card={foto}
                estiloCard={estiloCard}
                estiloImagem={estiloImagem}
                estiloDescricao={estiloDescricao}/>
            )
        })}
    </ul>
  )
}
