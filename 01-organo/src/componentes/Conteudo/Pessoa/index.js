import './Pessoa.css'
import { AiFillMinusCircle } from 'react-icons/ai'; 

const Pessoa = ({pessoa, cor, corFonte, aoDeletar}) => {
    return (
        <div className='pessoa'>
            <AiFillMinusCircle size='25px' className='deletarPessoa' onClick={evento => aoDeletar(pessoa)} />
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={pessoa.imagem} alt={pessoa.nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: corFonte}}>{pessoa.nome}</h4>
                <h5>{pessoa.cargo}</h5>
            </div>
            
        </div>
    )

}

export default Pessoa