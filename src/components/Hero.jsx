import { Link } from 'react-router-dom'
import s from './Hero.module.css'
import bg from '../assets/background.png'
import { useLang } from '../LangContext'
import { translations } from '../i18n'

export default function Hero() {
  const { lang } = useLang()
  const tr = translations[lang].hero
  return (
    <section className={s.section}>
      <img src={bg} alt="" className={s.bg} />
      <div className={s.overlay} />
      <div className={s.content}>
        <p className={s.label}>{tr.label}</p>
        <h1 className={s.title}>{tr.title[0]}<br />{tr.title[1]}</h1>
        <div className={s.btns}>
          <Link to="/contact" className={s.btnFill}>{tr.bookBtn}</Link>
          <Link to="/about"   className={s.btnOutline}>{tr.aboutBtn}</Link>
        </div>
      </div>
    </section>
  )
}
