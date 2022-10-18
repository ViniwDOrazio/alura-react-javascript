import { useState } from 'react';
import Banner from './componentes/Banner';
import Reinado from './componentes/Conteudo/Reinado';
import FormularioPessoa from './componentes/Formulario/FormularioPessoa';

function App() {
  const reis = ['rei 1', 'rei 2', 'rei 3'];

  const [pessoas, setPessoas] = useState([])

  const onNovaPessoaCadastrada = (pessoa) => {
    //console.log(pessoa)
    setPessoas([...pessoas, pessoa])
    console.log(pessoas)
  }

  return (
    <div className="App">
      <Banner />
      <FormularioPessoa onNovaPessoaCadastrada={pessoa => onNovaPessoaCadastrada(pessoa)} reis={reis}/>
      <Reinado descricao='Familias durante os reinados'/>

    </div>
  );
}

export default App;
