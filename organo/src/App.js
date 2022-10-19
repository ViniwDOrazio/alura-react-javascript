import { useState } from 'react';
import Banner from './componentes/Banner';
import Reinado from './componentes/Conteudo/Reinado';
import FormularioPessoa from './componentes/Formulario/FormularioPessoa';

function App() {

  const reis = [ 
    {
      nome: 'Rei 1',
      corBackground: 'rgb(255, 230, 230)',
      corDestaque: 'rgb(255, 155, 155)',
      corMarcacao: 'rgb(75, 0, 0)'
    },
    {
      nome: 'Rei 2',
      corBackground: 'rgb(230, 255, 230)',
      corDestaque: 'rgb(155, 255, 155)',
      corMarcacao: 'rgb(0, 75, 0)'
    },
    {
      nome: 'Rei 3',
      corBackground: 'rgb(230, 230, 255)',
      corDestaque: 'rgb(155, 155, 255)',
      corMarcacao: 'rgb(0, 0, 75)'
    },
    {
      nome: 'Rei 4',
      corBackground: 'rgb(255, 255, 230)',
      corDestaque: 'rgb(255, 255, 155)',
      corMarcacao: 'rgb(75, 75, 0)'
    },
    {
      nome: 'Rei 5',
      corBackground: 'rgb(230, 255, 255)',
      corDestaque: 'rgb(155, 255, 255)',
      corMarcacao: 'rgb(0, 75, 75)'
    },
    {
      nome: 'Rei 6',
      corBackground: 'rgb(255, 230, 255)',
      corDestaque: 'rgb(255, 155, 255)',
      corMarcacao: 'rgb(75, 0, 75)'
    },
    {
      nome: 'Rei 7',
      corBackground: 'rgb(255, 255, 255)',
      corDestaque: 'rgb(155, 155, 155)',
      corMarcacao: 'rgb(75, 75, 75)'
    }];
  const [pessoas, setPessoas] = useState([])

  const onNovaPessoaCadastrada = (pessoa) => {
    //console.log(pessoa)
    setPessoas([...pessoas, pessoa])
  }

  return (
    <div className="App">
      <Banner />
      <FormularioPessoa onNovaPessoaCadastrada={pessoa => onNovaPessoaCadastrada(pessoa)} reis={reis}/>
      <Reinado descricao='Familias durante os reinados' reis={reis} pessoas={pessoas}/>

    </div>
  );
}

export default App;
