import FormularioPessoa from "./Pessoa";
import FormularioReinado from "./Reinado";

export default function formularios({reis, aoNovaPessoaCadastrada, aoNovoReinado}) {
  return (
    <section className="formularios">
      <FormularioPessoa onNovaPessoaCadastrada={pessoa => aoNovaPessoaCadastrada(pessoa)} reis={reis}/>
      <FormularioReinado onNovoReinado={rei => aoNovoReinado(rei)} />
    </section>
  )
}
