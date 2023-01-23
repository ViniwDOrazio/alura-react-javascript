import { useState } from 'react';
import Banner from '../Banner';
import Reinado from '../Conteudo/Reinado';
import Footer from '../Footer';
import FormularioPessoa from '../Formulario/FormularioPessoa';
import reisJSON from './Reis.json';
import pessoasJSON from './Pessoas.json';


function App() {
  const [pessoas, setPessoas] = useState(pessoasJSON)

  const onNovaPessoaCadastrada = (pessoa) => {
    //console.log(pessoa)
    setPessoas([...pessoas, pessoa])
  }

  return (
    <div className="App">
      <Banner />
      <FormularioPessoa onNovaPessoaCadastrada={pessoa => onNovaPessoaCadastrada(pessoa)} reis={reisJSON}/>
      <Reinado descricao='Familias durante os reinados' reis={reisJSON} pessoas={pessoas}/>
      <Footer facebook='https://www.facebook.com/viniw.md' instagram='https://www.facebook.com/viniw.md' twitter='https://twitter.com/_Viniw' />
    </div>
  );
}

export default App;
