import logo from './img/logo.png'
import search from './search.png'
import Estilos from './cabecalho.module.scss'
export default function Cabecalho(){
    return (
        <header className={Estilos.cabecalho}>
            <img src={logo} alt="Logo"/>
            <div className={Estilos.cabecalho__container}>
                <input className={Estilos.cabecalho__input} type="text" placeholder="Pesquisar" />
                <img src={search} alt="icone lupa"/>
            </div>
        </header>
    )
}
