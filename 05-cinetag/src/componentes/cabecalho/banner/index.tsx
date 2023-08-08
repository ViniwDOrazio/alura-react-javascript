import style from './Banner.module.css'

interface BannerProps {
    bannerIndex: number
  }

export default function Banner({bannerIndex}: BannerProps) {
  return (
    <>
      <div className={style.capa} style={{backgroundImage:`url('/banners/banner${bannerIndex}.png')`}} />
    </>
  )
}
