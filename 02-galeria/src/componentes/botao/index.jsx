import Estilo from './botao.module.scss'

export default function Botao({children}) {
  return (
    <button className={Estilo.botao}>{children}</button>
  )
}