import Pessoa from '../Pessoa';
import './Familia.css'

const Familia = ({rei, pessoas, aoDeletar, aoMudarCorFamilia}) => {
    // return(
    //     (validacao) ? 
    //       <>conteudo</>
    //     : ""
    // )
    // return(
    //     (validacao) &&
    //     <>conteudo</>
    // )
    return (
        (pessoas.length > 0) && 
        <section className='familia' style={{backgroundColor: rei.corBackground}}>
            <input onChange={evento => aoMudarCorFamilia(rei, evento.target.value)} value={rei.corMarcacao} type='color' className='input-cor' />
            <h3 style={{borderColor: rei.corMarcacao, color: rei.corFonte}}>
                {rei.nome}
            </h3>
            <div className='pessoas'>
                {pessoas.map(pessoa => <Pessoa key={pessoa.nome} 
                                               pessoa={pessoa}
                                               cor={rei.corDestaque}
                                               corFonte={rei.corMarcacao}
                                               aoDeletar={aoDeletar}/>
                )}
            </div>
        </section>
    )
}

export default Familia;