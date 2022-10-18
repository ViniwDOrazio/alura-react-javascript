import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ComboBox from '../ComboBox';
import './FormularioPessoa.css';
import { useState } from 'react';

const FormularioPessoa = (props) => {
    
    const reizinhos = ['rei 1', 'rei 2', 'rei 3'];

    const [nome, setNome] = useState('aaa')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [reinado, setReinado] = useState('Selecione o Rei a Frente no Período')


    const onPostar = (evento) => {
        evento.preventDefault()
        console.log('postou => ', nome, cargo, imagem, reinado)
    }

    // const onChangeInput = (evento) => {
    //     setValor(evento.target.value)
    //     console.log(valor);
    // }

    return (
        <section className='formulario-pessoa'>
            <form onSubmit={onPostar}>
                <h2>Preencha os dados do membro da Família Targaryen</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite o Nome" 
                    required={true}
                    valor={nome} 
                    onChange={valor => setNome(valor)} />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite o Cargo"  
                    required={true} 
                    valor={cargo} 
                    onChange={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o Endereço da Imagem" 
                    valor={imagem} 
                    onChange={valor => setImagem(valor)} />
                <ComboBox  
                    label="Rei no Período" 
                    placeholder={reinado}
                    itens={reizinhos}  
                    required={true}
                    valor={reinado} 
                    onChange={valor => setReinado(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default FormularioPessoa;