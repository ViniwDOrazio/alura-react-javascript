import './Familia.css'

const Familia = (props) => {

    // style=({ })
    return (
        <section className='familia' style={{backgroundColor: props.corBackground}}>
            <h3 style={{borderColor: props.corMarcacao}}>
                {props.nome}
            </h3>
        </section>

    )
}

export default Familia;