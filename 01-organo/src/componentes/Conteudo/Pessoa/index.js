import './Pessoa.css'

const Pessoa = ({nome, imagem, cargo, cor, corFonte}) => {
    return (
        <div className='pessoa'>
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: corFonte}}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )

}

export default Pessoa