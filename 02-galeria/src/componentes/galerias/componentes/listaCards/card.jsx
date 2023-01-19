import DetalhesDoCard from './detalhesDoCard.jsx'

export default function Card({card, estiloCard, estiloImagem, estiloDescricao}) {
  if (! card.alt) {
    card.alt = card.titulo;  
  }

  return (
    <li key={card.id} className={estiloCard}>
        <img className={estiloImagem} src={card.imagem} alt={card.alt} />
        <DetalhesDoCard card={card} estiloDescricao={estiloDescricao} />
    </li>
  )
}
