import Estilos from './notFound.module.css';
import Img404 from 'assets/erro-404.png';

export default function NotFound() {
  console.log(Estilos);
  console.log(Estilos.conteudoContainer);
  return (
    <>
      <div className={Estilos.conteudoContainer}>
          <span className={Estilos.texto404}>404</span>
          <h1 className={Estilos.titulo}>Não achei</h1>
          <p className={Estilos.paragrafo}>Seja lá o que vc tentou eu não estava pronto pra te dar essa resposta.</p>
          <p className={Estilos.paragrafo}>Derepente eu estarei daqui a pouco, vc pode tentar de novo em algum tempo ou voltar onde estava antes.</p>
          <div className={Estilos.botaoContainer}>
            <button>Voltar</button>
          </div>
          <img className={Estilos.imagemCachorro} 
                src={Img404} 
                alt="Cachorro fofo está vestido e com um óculos na frente de um iPad" />
      </div>
      <div className={Estilos.espacoEmBranco} />
    </>
  )
}