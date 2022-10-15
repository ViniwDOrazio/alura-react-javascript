import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ComboBox from '../ComboBox';
import './FormularioPessoa.css';



const FormularioPessoa = (props) => {
    const reizinho = ['rei 1', 'rei 2', 'rei 3'];

    const onPostar = (evento) => {
        evento.preventDefault()
        console.log('postou')
    }



    return (
        <section className='formulario-pessoa'>
            <form onSubmit={onPostar}>
                <h2>Preencha os dados do membro da Família Targaryen</h2>
                <CampoTexto label="Nome" placeholder="Digite o Nome" required="true" />
                <CampoTexto label="Cargo" placeholder="Digite o Cargo"  required="true" />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" />
                <ComboBox  label="Rei no Período" placeholder="Selecione o Rei a Frente no Período" itens={reizinho}  required="true" />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default FormularioPessoa;