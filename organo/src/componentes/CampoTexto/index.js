import './CampoTexto.css';
const CampoTexto = (props) => {
    //const strteste=`${props.placeholder}...`;
    //console.log(props)
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;