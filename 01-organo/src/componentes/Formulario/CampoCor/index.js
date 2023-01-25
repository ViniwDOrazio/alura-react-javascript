import './CampoCor.css';
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
        <div className="campo-cor">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onChangeInput} type='color' required={props.required} />
        </div>
    )
}

export default CampoTexto;