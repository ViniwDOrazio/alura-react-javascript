import Banner from "componentes/cabecalho/banner";
import Titulo from "componentes/titulo";
import ListaVideos from "api/dados.json"
import { useParams } from "react-router-dom";
import style from "./player.module.css"
import styleBase from "../pages.module.css"
import NaoEncontrada from "pages/naoEncontrada";


export default function Player() {
    const parametros = useParams();

    // const [video, setVideo] = useState();
    // useEffect(() => {
    //     fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
    //         .then(resposta => resposta.json())
    //         .then(dados => {
    //             setVideo(...dados)
    //             if (!video){
    //                 return <NaoEncontrada />
    //             }
    //         })
    // }, [])

    const video = ListaVideos.find((video) => {
        return video.id === Number(parametros.id);
    })

    if (!video){
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner bannerIndex={3} />

            <section className={styleBase.baseSection}>
                <Titulo>
                    <h1>{video?.titulo}</h1>
                </Titulo>
                <section className={style.videoContainer} >
                    <iframe
                        width="100%"
                        height="315"
                        src={video?.link}
                        title={video?.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </section>
            </section>
        </>

    )
}