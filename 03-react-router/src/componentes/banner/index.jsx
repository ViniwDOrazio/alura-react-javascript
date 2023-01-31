import Estilos from './banner.module.css'
import circuloColorido from 'assets/circuloColorido.png'
import minhaFoto from 'assets/perfil.png'

export default function Banner() {
  return (
    <main className={Estilos.banner}>
        <div className={Estilos.apresentacao}>
            <div className={Estilos.titulo}>
                Vinícius D'Orazio
            </div>
            <p className={Estilos.paragrafo}>
                Minha página para escrever algumas coisas sobre a vida tecnologia e tudo mais que vier na cabeça.
            </p>
        </div>
        <div className={Estilos.imagens}>
            <img className={Estilos.circuloColorido} src={circuloColorido} aria-hidden alt="" />
            <img className={Estilos.minhaFoto} src={minhaFoto} alt="Foto de um homem branco com longos cabelos e utilizando um oculos em um ambiente escuro" />
        </div>
    </main>
  )
}
