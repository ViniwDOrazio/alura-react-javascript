import Familia from '../Familia';
import './Reinado.css'

const Reinado = ({descricao, reis, pessoas, aoDeletar, aoMudarCorFamilia, aoFavoritar}) => {
    // console.log(descricao);
    return (
        <div className='reinado'>
            <h2>{descricao}</h2>

            {reis.map(rei => <Familia rei={rei}
                                      key={rei.nome}
                                      pessoas={pessoas.filter(pessoa => pessoa.reinado === rei.nome)}
                                      aoDeletar={aoDeletar}
                                      aoMudarCorFamilia={aoMudarCorFamilia}
                                      aoFavoritar={aoFavoritar}/>)}
        </div>
    )
}

export default Reinado;