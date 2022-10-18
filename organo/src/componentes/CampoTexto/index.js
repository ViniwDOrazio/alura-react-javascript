import './CampoTexto.css';
const CampoTexto = (props) => {
    //const strteste=`${props.placeholder}...`;
    //console.log(props)

    //let valor = 'aa';
    const onChangeInput = (evento) => {
        props.onChange(evento.target.value)
        // setValor(evento.target.value)
        // console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onChangeInput} placeholder={props.placeholder} required={props.required} />
        </div>
    )
}

export default CampoTexto;