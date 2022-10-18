import Familia from '../Familia';
import './Reinado.css'

const Reinado = (props) => {
    return (
        <div className='reinado'>
            <h2>{props.descricao}</h2>
            <Familia nome='Rei 1' />
            <Familia nome='Rei 2' />
            <Familia nome='Rei 3' />
        </div>
    )
}

export default Reinado;