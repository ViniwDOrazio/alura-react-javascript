import Pessoa from '../Pessoa';
import './Familia.css'

const Familia = (props) => {
    return (
        (props.pessoas.length > 0) && 
        //(props.pessoas.length > 0) ? 
        <section className='familia' style={{backgroundColor: props.corBackground}}>
            <h3 style={{borderColor: props.corMarcacao}}>
                {props.nome}
            </h3>
            <div className='pessoas'>
                {props.pessoas.map(pessoa => <Pessoa nome={pessoa.nome} 
                                    key={pessoa.nome} 
                                    cargo={pessoa.cargo} 
                                    imagem={pessoa.imagem}
                                    cor={props.corDestaque}
                                    corFonte={props.corMarcacao}
                                    aoDeletar={props.aoDeletar}/>
                // {
                //     // console.log(<Pessoa nome={pessoa.nome} 
                //     //     key={pessoa.nome} 
                //     //     cargo={pessoa.cargo} 
                //     //     imagem={pessoa.imagem}
                //     //     cor={props.corDestaque}
                //     //     corFonte={props.corMarcacao}
                //     //     aoDeletar={props.aoDeletar}/>);
                //     return <Pessoa nome={pessoa.nome} 
                //     key={pessoa.nome} 
                //     cargo={pessoa.cargo} 
                //     imagem={pessoa.imagem}
                //     cor={props.corDestaque}
                //     corFonte={props.corMarcacao}
                //     aoDeletar={props.aoDeletar}/>
                // }
                )}
            </div>
        </section>
        //: ""
    )
}

export default Familia;