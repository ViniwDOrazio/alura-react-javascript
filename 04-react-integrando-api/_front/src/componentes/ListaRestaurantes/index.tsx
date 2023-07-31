import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios from 'axios';
import IPaginacao from '../../interfaces/IPaginacao';

const ListaRestaurantes = () => {
  const modeExibicaoVerMais = false;
  const URL_INICIAL = 'http://localhost:8002/api/v1/restaurantes/'

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [proximaPagina, setProximaPagina] = useState('')
  const [anteriorPagina, setAnteriorPagina] = useState('');

  const CarregarConteudoPagina = (url:string) => {
    axios.get<IPaginacao<IRestaurante>>(url)
    .then(resposta => {
      if (modeExibicaoVerMais) {
        setRestaurantes([...restaurantes, ...resposta.data.results])
      } else {
        setRestaurantes(resposta.data.results)
      }
      setProximaPagina(resposta.data.next)
      setAnteriorPagina(resposta.data.previous)
    })
    .catch(error => {console.log(error)})
  }

  useEffect(()=>{
    CarregarConteudoPagina(URL_INICIAL)
  }, []);

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}

    {(!modeExibicaoVerMais) && <button onClick={() => CarregarConteudoPagina(anteriorPagina)} disabled={!anteriorPagina}>Anterior</button>}
    {(!modeExibicaoVerMais) && <button onClick={() => CarregarConteudoPagina(proximaPagina)} disabled={!proximaPagina}>Proxima</button>}

    {modeExibicaoVerMais && proximaPagina && <button onClick={() => CarregarConteudoPagina(proximaPagina)}>Ver Mais</button>}
  </section>)
}

export default ListaRestaurantes