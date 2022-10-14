import CampoTexto from '../CampoTexto';
import './FormularioPessoa.css';
const FormularioColaborador = (props) => {
    return (
        <section className='formulario-pessoa'>
            <form>
                <h2>Preencha os dados do membro da Família Targaryen</h2>
                <CampoTexto label="Nome" placeholder="Digite o Nome" />
                <CampoTexto label="Cargo" placeholder="Digite o Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" />
            </form>
        </section>
    )
}

export default FormularioColaborador;