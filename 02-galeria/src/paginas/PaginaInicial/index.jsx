import Banner from "../../componentes/banner";
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import Rodape from "../../componentes/rodape";
import '../../Estilos/EstilosGlobais.scss'
import Estilos from './paginaInicial.module.scss'

export default function PaginaInicial(){
    return (
        <>
            <Cabecalho />
            <main className={Estilos.principal}>
                <Menu />
                <Banner />
            </main>
            <Rodape />
            
        </>
    )
}
