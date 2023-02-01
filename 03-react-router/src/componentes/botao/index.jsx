import Estilos from './botao.module.css';

export default function Botao({children, tamanho}) {
  return (
    <button className={`${Estilos.botao} ${Estilos[tamanho]}`}>{children}</button>
  )
}
