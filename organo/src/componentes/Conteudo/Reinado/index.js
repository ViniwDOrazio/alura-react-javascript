import Familia from '../Familia';
import './Reinado.css'

const Reinado = (props) => {
    return (
        <div className='reinado'>
            <h2>{props.descricao}</h2>
            {props.reis.map(
                rei => <Familia 
                            key={rei.nome} 
                            nome={rei.nome} 
                            corBackground={rei.corBackground}
                            corDestaque={rei.corDestaque}
                            corMarcacao={rei.corMarcacao}/>
            )}
        </div>
    )
}

export default Reinado;