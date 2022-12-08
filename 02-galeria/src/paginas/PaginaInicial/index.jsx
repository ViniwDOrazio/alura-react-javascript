import Banner from "../../componentes/banner";
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import '../Estilo/EstilosGlobais/EstilosGlobais.scss'
import Estilos from './paginaInicial.module.scss'

export default function PaginaInicial(){
    return (
        <>
            <Cabecalho />
            <main className={Estilos.principal}>
                <Menu />
                <Banner />
            </main>
            
        </>
    )
}
