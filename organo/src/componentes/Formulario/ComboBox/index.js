import './ComboBox.css';

const ComboBox = (props) => {

    const onChangeInput = (evento) => {
        props.onChange(evento.target.value)
    }



    return (
        <div className="combo-box">
            <label>{props.label}</label>
            <select 
                    value={props.valor} 
                    onChange={onChangeInput} 
                    //defaultValue={props.placeholder}
                    required={props.required}>

                <option disabled readOnly>{props.placeholder}</option>
                {props.itens.map(item => <option key={item.nome}>{item.nome}</option>)}
                
            </select>
        </div>
    )
}

export default ComboBox;