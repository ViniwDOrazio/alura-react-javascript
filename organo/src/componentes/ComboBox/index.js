import './ComboBox.css';

const ComboBox = (props) => {
    return (
        <div className="combo-box">
            <label>{props.label}</label>
            <select defaultValue={props.placeholder}  required={props.required}>
                <option disabled selected readOnly>{props.placeholder}</option>
                
                {props.itens.map(item => <option key={item}>{item}</option>)}
                
            </select>
        </div>
    )
}

export default ComboBox;