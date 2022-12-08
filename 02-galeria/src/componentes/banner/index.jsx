import banner from './img/banner.png'
import Estilos from './banner.module.scss'

export default function Banner() {
  return (
    <div className={Estilos.banner}>
        <h1>Galeria Genérica</h1>
        <img src={banner} alt="Bannerzinho" />
    </div>
  )
}
