import './Pessoa.css'
import { AiFillMinusCircle } from 'react-icons/ai'; 

const Pessoa = ({nome, imagem, cargo, cor, corFonte, aoDeletar}) => {
    return (
        <div className='pessoa'>
            <AiFillMinusCircle size='25px' className='deletarPessoa' onClick={aoDeletar} />
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: corFonte}}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
            
        </div>
    )

}

export default Pessoa