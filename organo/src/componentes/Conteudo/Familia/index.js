import Pessoa from '../Pessoa';
import './Familia.css'

const Familia = (props) => {


    return (
        <section className='familia' style={{backgroundColor: props.corBackground}}>
            <h3 style={{borderColor: props.corMarcacao}}>
                {props.nome}
            </h3>
            <div className='pessoas'>
                {props.pessoas.map(pessoa => <Pessoa nome={pessoa.nome} cargo={pessoa.cargo} imagem={pessoa.imagem}/>)}
            </div>
        </section>

    )
}

export default Familia;