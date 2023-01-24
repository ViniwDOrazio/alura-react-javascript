import { useState } from 'react';
import Banner from '../Banner';
import Reinado from '../Conteudo/Reinado';
import Footer from '../Footer';
import FormularioPessoa from '../Formulario/FormularioPessoa';
import reisJSON from './Reis.json';
import pessoasJSON from './Pessoas.json';
import hexToRgba from 'hex-to-rgba';


function App() {
  const [reis, setReis] = useState(reisJSON)
  const [pessoas, setPessoas] = useState(pessoasJSON)

  const aoNovaPessoaCadastrada = (pessoa) => {
    setPessoas([...pessoas, pessoa])
  }

  function aoMudarCorFamilia(reiAlterar, cor){
    setReis(reis.map(rei => {
      if(rei === reiAlterar) {
        rei.corMarcacao = cor;
        rei.corFonte = hexToRgba(cor, 0.75);
        rei.corDestaque = hexToRgba(cor, 0.5);
        rei.corBackground = hexToRgba(cor, 0.25);
      }
      return rei;
    }));
  }
  
  function deletarPessoa(pessoa) 
  {
    var lista = pessoas;
    var index = pessoas.indexOf(pessoa);
    if (index > -1)
      lista.splice(index, 1);
    console.log(lista)
    setPessoas([...lista]);
    
  }

  return (
    <div className="App">
      <Banner />
      <FormularioPessoa onNovaPessoaCadastrada={pessoa => aoNovaPessoaCadastrada(pessoa)} reis={reis}/>
      <Reinado descricao='Familias durante os reinados' reis={reis} pessoas={pessoas} aoDeletar={deletarPessoa} aoMudarCorFamilia={aoMudarCorFamilia}/>


      <Footer facebook='https://www.facebook.com/viniw.md' instagram='https://www.facebook.com/viniw.md' twitter='https://twitter.com/_Viniw' />
    </div>
  );
}

export default App;
