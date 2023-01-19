import Expandir from './icon/expandir.png'
import Favorito from './icon/favorito.png'

export default function DetalhesDoCard({card, estiloDescricao}) {
    if (card.titulo)
    return (
        <>
            <p className={estiloDescricao}>{card.titulo}</p>
            <div>
                <p>{card.creditos}</p>
                <span>
                    <img src={Favorito} alt="♥" />
                    <img src={Expandir} alt="Ampliar" />
                </span>
            </div>
        </>
    )
    else
        return (<></>);
}
