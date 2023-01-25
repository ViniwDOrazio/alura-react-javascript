import Botao from '../../Botao';
import CampoTexto from '../../CampoTexto';
import './FormularioReinado.css';
import { useState } from 'react';

const FormularioReinado = (props) => {

    const [reinado, setReinado] = useState('')
    const [cor, setCor] = useState('')


    const onPostar = (evento) => {
        //debugger
        evento.preventDefault()
        props.onNovoReinado({reinado, cor})
        setReinado('');
        setCor('#000000');
    }

    return (
        <section className='formulario-reinado'>
            <form onSubmit={onPostar}>
                <h2>Preencha os dados do Reinado</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite o Nome" 
                    required
                    valor={reinado} 
                    onChange={valor => setReinado(valor)} />
                <CampoTexto 
                    label="Cor" 
                    placeholder="Digite a Cor"  
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