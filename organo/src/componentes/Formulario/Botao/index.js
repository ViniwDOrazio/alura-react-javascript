import './Botao.css';
const Botao = (props) => {
    //const strteste=`${props.placeholder}...`;
    //console.log(props)
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao;