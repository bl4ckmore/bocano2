import { Link } from 'react-router-dom'
import s from './Hero.module.css'
import bg from '../assets/background.png'

export default function Hero() {
  return (
    <section className={s.section}>
      <img src={bg} alt="" className={s.bg} />
      <div className={s.overlay} />
      <div className={s.content}>
        <p className={s.label}>Tbilisi, Georgia</p>
        <h1 className={s.title}>Architecture<br />& Design Studio</h1>
        <div className={s.btns}>
          <Link to="/contact" className={s.btnFill}>Book a Consultation</Link>
          <Link to="/about"   className={s.btnOutline}>About Us</Link>
        </div>
      </div>
    </section>
  )
}
