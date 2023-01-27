import Botao from '../../Botao';
import CampoTexto from '../../CampoTexto';
import CampoCor from '../../CampoCor';
import '../Formularios.css';
import { useState } from 'react';


const FormularioReinado = (props) => {

    const [reinado, setReinado] = useState('')
    const [cor, setCor] = useState('#000000')


    const onPostar = (evento) => {
        //debugger
        evento.preventDefault()
        props.onNovoReinado({nome: reinado, 
                             corMarcacao: cor})
        setReinado('');
        setCor('#000000');
    }

    return (
        <section className='formulario'>
            <form onSubmit={onPostar}>
                <h3>Preencha os dados do Reinado</h3>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite o Nome" 
                    required
                    valor={reinado} 
                    onChange={valor => setReinado(valor)} />
                <CampoCor
                    label="Cor" 
                    required
                    valor={cor} 
                    onChange={valor => setCor(valor)} />
                <Botao>
                    Criar Reinado
                </Botao>
            </form>
        </section>
    )
}

export default FormularioReinado;