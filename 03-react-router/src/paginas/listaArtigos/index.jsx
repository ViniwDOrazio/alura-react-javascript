import CartaoArtigos from 'componentes/cartaoArtigos'
import Estilos from './listaArtigos.module.css'
import listaPostagens from 'assets/listaPostagens.json'

export default function ListaArtigos({QuantidadeMaximoDeCardsNaTela, IdCardAtual}) {
  var listaUtiliza = listaPostagens;

  

  if (IdCardAtual){
    let indice = listaUtiliza.indexOf(listaPostagens.find(artigo => artigo.id === Number(IdCardAtual)));
    console.log(listaUtiliza.slice(indice+1));
    console.log(listaUtiliza.slice(0, indice-1));

    let listaTemp = []
    if (indice < listaUtiliza.length - 1)
      listaTemp = listaTemp.concat(listaUtiliza.slice(indice+1));
    if (indice > 0)
    listaTemp = listaTemp.concat(listaUtiliza.slice(0, indice-1));

    listaUtiliza = listaTemp;
  }

  if (QuantidadeMaximoDeCardsNaTela){
    console.log(listaUtiliza);
    listaUtiliza = [].concat(listaUtiliza.slice(0, QuantidadeMaximoDeCardsNaTela));
    console.log(listaUtiliza);
  }

  return (
    <ul className={Estilos.posts}>
      {listaUtiliza.map((postagem) => (
        <li key={postagem.id}><CartaoArtigos post={postagem} /></li>
      ))}
    </ul>
  )
}
