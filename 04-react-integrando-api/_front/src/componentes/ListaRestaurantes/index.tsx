import { useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios from 'axios';
import IPaginacao from '../../interfaces/IPaginacao';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [proximaPagina, setProximaPagina] = useState('http://localhost:8001/api/v1/restaurantes/')

  const CarregarConteudoPagina = () => {
    axios.get<IPaginacao<IRestaurante>>(proximaPagina)
    .then(resposta => {
      setRestaurantes([...restaurantes, ...resposta.data.results])
      setProximaPagina(resposta.data.next)
    })
    .catch(error => {console.log(error)})
  }

  useEffect(()=>{
    CarregarConteudoPagina()
  }, []);

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}

    {proximaPagina && <button onClick={CarregarConteudoPagina}>Ver Mais</button>}
  </section>)
}

export default ListaRestaurantes