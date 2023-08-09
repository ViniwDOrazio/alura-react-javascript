import Banner from "componentes/cabecalho/banner";
import Titulo from "componentes/titulo";
import style from "../pages.module.css"

export default function NaoEncontrada() {
    return (
        <>
            <Banner bannerIndex={3} />

            <section className={style.baseSection}>
                <Titulo>
                    <h1>Ooops!</h1>
                </Titulo>
                <section className={style.videoContainer} >
                    <p>Nada feito irmão, levou um 404 na cara</p>
                </section>
            </section>
        </>

    )
}