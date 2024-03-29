import Pessoa from '../Pessoa';
import './Familia.css'

// function MontaPessoas({pessoas, aoDeletar})
// {
//     return(

//     )
// }
const Familia = ({rei, pessoas, aoDeletar, aoMudarCorFamilia, aoFavoritar}) => {
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
        <section className='familia' style={{backgroundColor: rei.corBackground}}>
            <input onChange={evento => aoMudarCorFamilia(rei, evento.target.value)} value={rei.corMarcacao} type='color' className='input-cor' />
            <h3 style={{borderColor: rei.corMarcacao, color: rei.corFonte}}>
                {rei.nome}
            </h3>
            
            <div className='pessoas'>
                {
                    (pessoas.length > 0) ?
                    <>{pessoas.map(pessoa => <Pessoa key={pessoa.nome} 
                                    pessoa={pessoa}
                                    cor={rei.corDestaque}
                                    corFonte={rei.corMarcacao}
                                    aoDeletar={aoDeletar}
                                    aoFavoritar={aoFavoritar}/>)}</>
                    : <Pessoa pessoa={{nome: 'Nenhuma', cargo: 'Não definido', imagem: "/imagens/perfil-vazio.jpg", reinado: ''}}
                            cor={rei.corDestaque} 
                            corFonte={rei.corMarcacao} />
                }

            </div>
        </section>
    )
}

export default Familia;