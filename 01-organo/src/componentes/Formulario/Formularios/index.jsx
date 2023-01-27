import FormularioPessoa from "./Pessoa";
import FormularioReinado from "./Reinado";
import {IoIosArrowDropupCircle, IoIosArrowDropdown} from "react-icons/io";

export default function formularios({reis, aoNovaPessoaCadastrada, aoNovoReinado, cadastroVisivel, aoMostrarCadastro}) {
  const propsMostrar={
    size: 25,
    onClick: evento => aoMostrarCadastro(cadastroVisivel),
    color: cadastroVisivel ? "#000000" : "#888888"
  }

  return (
    <section className="formularios">
      <div className="formularios-titulo">
        <h2>Cadastrar Novo</h2>
        <div className="formularios-icon">
          {cadastroVisivel ? <IoIosArrowDropupCircle {...propsMostrar} /> : <IoIosArrowDropdown {...propsMostrar} />}
        </div>
      </div>
      {
            cadastroVisivel && 
            <>
              <FormularioPessoa onNovaPessoaCadastrada={pessoa => aoNovaPessoaCadastrada(pessoa)} reis={reis}/>
              <FormularioReinado onNovoReinado={rei => aoNovoReinado(rei)} />
            </>
      }

    </section>
  )
}
