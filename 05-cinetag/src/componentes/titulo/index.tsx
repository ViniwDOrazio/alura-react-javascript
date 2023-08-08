import style from './titulo.module.css'

type Props = {
    children?: JSX.Element
  }

export default function Titulo({ children } : Props) {
  return (
    <div className={style.texto}>
        {children}
    </div>
  )
}
