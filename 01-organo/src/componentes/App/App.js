import { useState } from 'react';
import Banner from '../Banner';
import Reinado from '../Conteudo/Reinado';
import Footer from '../Footer';
import Formularios from '../Formulario/Formularios';
import reisJSON from './Reis.json';
import pessoasJSON from './Pessoas.json';
import hexToRgba from 'hex-to-rgba';
import './App.css';


function App() {
  const [reis, setReis] = useState(reisJSON)
  const [pessoas, setPessoas] = useState(pessoasJSON)
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const aoNovaPessoaCadastrada = (pessoa) => {
    setPessoas([...pessoas, pessoa])
  }

  const aoNovoReinado = (rei) => {
    if (! rei.corFonte)
      rei.corFonte = hexToRgba(rei.corMarcacao, 0.75);
    if (! rei.corDestaque)
      rei.corDestaque = hexToRgba(rei.corMarcacao, 0.5);
    if (! rei.corBackground)
      rei.corBackground = hexToRgba(rei.corMarcacao, 0.25);

    setReis([...reis, rei])
  }

  function aoMostrarCadastro() {
    setMostrarCadastro(!mostrarCadastro);
  }

  function aoFavoritar(pessoaAlterar) {
    setPessoas(pessoas.map(pessoa => {
      if(pessoa === pessoaAlterar) {
        pessoa.favorito = ! pessoa.favorito; 
      }
      return pessoa;
    }));
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
  
  function deletarPessoa(pessoaExcluir) 
  {
    // console.log(pessoas.indexOf(pessoaExcluir));
    // console.log(pessoas.filter(pessoa => pessoa !== pessoaExcluir).indexOf(pessoaExcluir));
    setPessoas(pessoas.filter(pessoa => pessoa !== pessoaExcluir));
    
    // var lista = pessoas;
    // var index = pessoas.indexOf(pessoaExcluir);
    // if (index > -1)
    //   lista.splice(index, 1);
    // console.log(lista)
    // setPessoas([...lista]);
  }
  
  return (
    <div className="App">
      <Banner />
      <Formularios reis={reis} aoNovaPessoaCadastrada={aoNovaPessoaCadastrada} aoNovoReinado={aoNovoReinado} cadastroVisivel={mostrarCadastro} aoMostrarCadastro={aoMostrarCadastro}/>
      <Reinado 
        descricao='Familias durante os reinados' 
        reis={reis} 
        pessoas={pessoas} 
        aoDeletar={deletarPessoa} 
        aoMudarCorFamilia={aoMudarCorFamilia}
        aoFavoritar={aoFavoritar}/>
      <Footer facebook='https://www.facebook.com/viniw.md' instagram='https://www.facebook.com/viniw.md' twitter='https://twitter.com/_Viniw' />
    </div>
  );
}

export default App;
