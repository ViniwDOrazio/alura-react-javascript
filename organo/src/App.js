import { useState } from 'react';
import Banner from './componentes/Banner';
import Reinado from './componentes/Conteudo/Reinado';
import Footer from './componentes/Footer';
import FormularioPessoa from './componentes/Formulario/FormularioPessoa';

function App() {

  const reis = [ 
    {
      nome: 'Aegon I',
      corBackground: 'rgb(255, 230, 230)',
      corDestaque: 'rgb(255, 155, 155)',
      corMarcacao: 'rgb(75, 0, 0)'
    },
    {
      nome: 'Aenys I',
      corBackground: 'rgb(230, 255, 230)',
      corDestaque: 'rgb(155, 255, 155)',
      corMarcacao: 'rgb(0, 75, 0)'
    },
    {
      nome: 'Maegor I',
      corBackground: 'rgb(230, 230, 255)',
      corDestaque: 'rgb(155, 155, 255)',
      corMarcacao: 'rgb(0, 0, 75)'
    },
    {
      nome: 'Jaehaerys I',
      corBackground: 'rgb(255, 255, 230)',
      corDestaque: 'rgb(255, 255, 155)',
      corMarcacao: 'rgb(75, 75, 0)'
    },
    {
      nome: 'Viserys I',
      corBackground: 'rgb(230, 255, 255)',
      corDestaque: 'rgb(155, 255, 255)',
      corMarcacao: 'rgb(0, 75, 75)'
    },
    {
      nome: 'Aegon II',
      corBackground: 'rgb(255, 230, 255)',
      corDestaque: 'rgb(255, 155, 255)',
      corMarcacao: 'rgb(75, 0, 75)'
    },
    {
      nome: 'Aegon III',
      corBackground: 'rgb(255, 255, 255)',
      corDestaque: 'rgb(155, 155, 155)',
      corMarcacao: 'rgb(75, 75, 75)'
    }];

    
  const [pessoas, setPessoas] = useState([
    {nome: 'Aegon', cargo:'O Conquistador', imagem:'/imagens/rei/Aegon.jpg', reinado:'Aegon I'},
    {nome: 'Visenya', cargo:'Rainha', imagem:'/imagens/rei/Visenya.jpg', reinado:'Aegon I'},
    {nome: 'Rhaenys', cargo:'Rainha', imagem:'/imagens/rei/Rhaenys.jpg', reinado:'Aegon I'},
    {nome: 'Orys Baratheon', cargo:'Irmão Bastardo', imagem:'/imagens/rei/OrysBaratheon.jpg', reinado:'Aegon I'},
    {nome: 'Maegor I', cargo:'Principe', imagem:'/imagens/rei/Maegor.jpg', reinado:'Aegon I'},
    {nome: 'Aenys I', cargo:'Principe Herdeiro', imagem:'/imagens/rei/Aenys.jpg', reinado:'Aegon I'},


    {nome: 'Aenys I', cargo:'Rei', imagem:'/imagens/rei/Aenys.jpg', reinado:'Aenys I'},
    {nome: 'Maegor I', cargo:'Irmão do Rei', imagem:'/imagens/rei/Maegor.jpg', reinado:'Aenys I'},
    {nome: 'Jaehaerys I', cargo:'Principe', imagem:'/imagens/rei/Jaehaerys.png', reinado:'Aenys I'},
    {nome: 'Alysanne', cargo:'???', imagem:'/imagens/rei/Alysanne.jpg', reinado:'Aenys I'},

    {nome: 'Maegor I', cargo:'O Cruel', imagem:'/imagens/rei/Maegor.jpg', reinado:'Maegor I'},
    {nome: 'Jeyne Westerling', cargo:'Esposa', imagem:'/imagens/rei/Jeyne.jpg', reinado:'Maegor I'},

    {nome: 'Jaehaerys I', cargo:'O Conciliador, Velho Rei, o Sábio', imagem:'/imagens/rei/Jaehaerys.png', reinado:'Jaehaerys I'},
    {nome: 'Alysanne', cargo:'Esposa', imagem:'/imagens/rei/Alysanne.jpg', reinado:'Jaehaerys I'},
    {nome: 'Viserys I', cargo:'???', imagem:'/imagens/rei/Viserys.png', reinado:'Jaehaerys I'},
    {nome: 'Rhaenys', cargo:'A Rainha que Nunca Foi', imagem:'/imagens/rei/RhaenysNaoRainha.png', reinado:'Jaehaerys I'},
    {nome: 'Daemon', cargo:'???', imagem:'/imagens/rei/Daemon.jpg', reinado:'Jaehaerys I'},
    
    {nome: 'Viserys I', cargo:'O Pacífico', imagem:'/imagens/rei/Viserys.png', reinado:'Viserys I'},
    {nome: 'Aemma', cargo:'Esposa', imagem:'/imagens/rei/Aemma.jpg', reinado:'Viserys I'},
    {nome: 'Alicent', cargo:'Esposa II', imagem:'/imagens/rei/Alicent.png', reinado:'Viserys I'},
    {nome: 'Daemon', cargo:'Irmão do Rei', imagem:'/imagens/rei/Daemon.jpg', reinado:'Viserys I'},
    {nome: 'Rhaenyra', cargo:'Princesa Herdeira', imagem:'/imagens/rei/Rhaenyra.jpg', reinado:'Viserys I'},
    {nome: 'Aegon II', cargo:'Principe', imagem:'/imagens/rei/AegonII.jpg', reinado:'Viserys I'},
    {nome: 'Helaena', cargo:'Filha', imagem:'/imagens/rei/Helaena.jpg', reinado:'Viserys I'},
    {nome: 'Aemond', cargo:'Principe III', imagem:'/imagens/rei/Aemond.jpg', reinado:'Viserys I'},
    {nome: 'Daeron', cargo:'Principe IV', imagem:'/imagens/rei/Daeron.jpg', reinado:'Viserys I'},
    
    {nome: 'Aegon II', cargo:'Rei', imagem:'/imagens/rei/AegonII.jpg', reinado:'Aegon II'},
    
    {nome: 'Aegon III', cargo:'O Banidor de Dragões', imagem:'/imagens/rei/AegonIII.jpg', reinado:'Aegon III'}
  ])

  

  const onNovaPessoaCadastrada = (pessoa) => {
    //console.log(pessoa)
    setPessoas([...pessoas, pessoa])
  }

  return (
    <div className="App">
      <Banner />
      <FormularioPessoa onNovaPessoaCadastrada={pessoa => onNovaPessoaCadastrada(pessoa)} reis={reis}/>
      <Reinado descricao='Familias durante os reinados' reis={reis} pessoas={pessoas}/>
      <Footer facebook='https://www.facebook.com/viniw.md' instagram='https://www.facebook.com/viniw.md' twitter='https://twitter.com/_Viniw' />
    </div>
  );
}

export default App;
