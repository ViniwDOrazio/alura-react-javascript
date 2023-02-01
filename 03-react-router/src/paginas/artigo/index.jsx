import Postagem from 'componentes/postagem'
import { useParams } from 'react-router-dom'
import listaPostagens from 'assets/listaPostagens.json'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from 'paginas/notFound';
import Banner from 'componentes/banner';
import ListaArtigos from 'paginas/listaArtigos';
import Estilos from './artigo.module.css'

export default function Artigo() {
  const UserParam = useParams();
  const artigoSelecionado = listaPostagens.find(artigo => artigo.id === Number(UserParam.id));

  if (!artigoSelecionado)
    return (<NotFound />);

  var url = `${window.origin}/artigo/${artigoSelecionado.id}/${artigoSelecionado.titulo.replaceAll(" ", "-").replaceAll(":", "-").replaceAll("--", "-").replaceAll("?", "").replaceAll("!", "").toLowerCase()}`;

  if (!UserParam.titulo)
    window.location.href = url;

  console.log();
  return (
    <>
      <Banner />
      <Postagem fotoCapa={`/assets/capas/${artigoSelecionado.id}/capa.png`} titulo={artigoSelecionado.titulo}>
        <ReactMarkdown>
          {artigoSelecionado.texto}
        </ReactMarkdown>
      </Postagem>
      <h2 className={Estilos.tituloOutrosPosts}>Outras Postagens</h2>
      <ListaArtigos QuantidadeMaximoDeCardsNaTela={4} IdCardAtual={artigoSelecionado.id} />
    </>
  )
}
