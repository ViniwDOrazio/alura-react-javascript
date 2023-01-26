import './Pessoa.css'
import { AiFillMinusCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai'; 

const Pessoa = ({pessoa, cor, corFonte, aoDeletar, aoFavoritar}) => {
    const propsFavorito={
        size: 25,
        onClick: evento => aoFavoritar(pessoa),
        color: pessoa.favorito ? "#C7DF16" : "#888888"
    }

    return (
        <div className='pessoa'>
            {
                (aoDeletar) &&
                <AiFillMinusCircle size='25px' className='deletarPessoa' onClick={evento => aoDeletar(pessoa)} />
            }
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={pessoa.imagem} alt={pessoa.nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: corFonte}}>{pessoa.nome}</h4>
                <h5>{pessoa.cargo}</h5>
                {
                    (aoFavoritar) && 
                    <div className='favoritar'>
                        {
                            pessoa.favorito ? <AiFillStar  {...propsFavorito}/> : <AiOutlineStar {...propsFavorito}/>
                        }
                    </div>
                }
            </div>
        </div>
    )

}

export default Pessoa