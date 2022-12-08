import facebook from './icones/facebook.svg'
import instagram from './icones/instagram.svg'
import twitter from './icones/twitter.svg'
import Estilos from './rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={Estilos.rodape}>
      <div className={Estilos.rodape__limitador}>
        <div className={Estilos.rodape__itemEsquerda}><a href="https://twitter.com/_viniw" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a></div>
        <div className={Estilos.rodape__itemEsquerda}><a href="https://www.instagram.com/viniw.dorazio/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a></div>
        <div className={Estilos.rodape__itemEsquerda}><a href="https://www.facebook.com/viniw.md" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a></div>
      </div>
      <div className={Estilos.rodape__limitador}>
        <div className={Estilos.rodape__itemDireita}>desenvolvido por: <a href="https://github.com/ViniwDOrazio/" target="_blank" rel="noopener noreferrer">Viniw</a></div>
      </div>      
    </footer>
  )
}


