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
    // axios.get<IPaginacao<IRestaurante>>('http://localhost:8000/api/v1/restaurantes/?ordering=nome&search=neo')
    // axios.get<IPaginacao<IRestaurante>>('http://localhost:8000/api/v1/restaurantes/', {
    //   params: {
    //     ordering: 'nome',
    //     search: 'neo'
    //   }
    // })

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
// import axios, { AxiosRequestConfig } from 'axios';
// import { useEffect, useState } from 'react';
// import { IPaginacao } from '../../interfaces/IPaginacao';
// import IRestaurante from '../../interfaces/IRestaurante';
// import style from './ListaRestaurantes.module.scss';
// import Restaurante from './Restaurante';

// // esses são os possíveis parâmetros que podemos enviar para a API
// interface IParametrosBusca {
//   ordering?: string
//   search?: string
// }

// const ListaRestaurantes = () => {

//   const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
//   const [proximaPagina, setProximaPagina] = useState('')
//   const [paginaAnterior, setPaginaAnterior] = useState('')

//   const [busca, setBusca] = useState('')

//   // agora, o carregarDados recebe opcionalmente as opções de configuração do axios
//   const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {

//     axios.get<IPaginacao<IRestaurante>>(url, opcoes)
//       .then(resposta => {
//         setRestaurantes(resposta.data.results)
//         setProximaPagina(resposta.data.next)
//         setPaginaAnterior(resposta.data.previous)
//       })
//       .catch(erro => {
//         console.log(erro)
//       })
//   }

//   // a cada busca, montamos um objeto de opções
//   const buscar = (evento: React.FormEvent<HTMLFormElement>) => {
//     evento.preventDefault()
//     const opcoes = {
//       params: {

//       } as IParametrosBusca
//     }
//     if (busca) {
//       opcoes.params.search = busca
//     }
//     carregarDados('http://localhost:8000/api/v1/restaurantes/', opcoes)
//   }

//   useEffect(() => {
//     // obter restaurantes
//     carregarDados('http://localhost:8000/api/v1/restaurantes/')
//   }, [])

//   return (<section className={style.ListaRestaurantes}>
//     <h1>Os restaurantes mais <em>bacanas</em>!</h1>
//     <form onSubmit={buscar}>
//       <input type="text" value={busca} onChange={evento => setBusca(evento.target.value)} />
//       <button type='submit'>buscar</button>
//     </form>
//     {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
//     {<button onClick={() => carregarDados(paginaAnterior)} disabled={!paginaAnterior}>
//       Página Anterior
//     </button>}
//     {<button onClick={() => carregarDados(proximaPagina)} disabled={!proximaPagina}>
//       Próxima página
//     </button>}
//   </section>)
// }

// export default ListaRestaurantes