import Banner from "../../componentes/banner";
import Cabecalho from "../../componentes/cabecalho";
import Fotos from "../../componentes/galerias/fotos";
import Populares from "../../componentes/galerias/populares";
import Menu from "../../componentes/menu";
import Rodape from "../../componentes/rodape";
import '../../Estilos/EstilosGlobais.scss'
import Estilos from './paginaInicial.module.scss'

export default function PaginaInicial(){
    return (
        <>
            <Cabecalho />
            <main>
                <section className={Estilos.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={Estilos.galeria}>
                    <Fotos />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}
