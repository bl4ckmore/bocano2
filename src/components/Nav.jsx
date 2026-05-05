import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import logo from '../assets/bocanoL.png'

export default function Nav({ onLogoClick }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const handleLogo = (e) => {
    close()
    if (onLogoClick) {
      e.preventDefault()
      onLogoClick()
    }
  }

  return (
    <>
      <header className={s.header}>
        <Link to="/" className={s.logo} onClick={handleLogo}>
          <img src={logo} alt="Bocano Architecture" className={s.logoImg}/>
        </Link>

        <nav className={s.nav}>
          <Link to="/"        className={s.link}>Projects</Link>
          <Link to="/about"   className={s.link}>About</Link>
          <Link to="/contact" className={s.link}>Contact</Link>
        </nav>

        <div className={s.actions}>
          <Link to="/contact" className={s.btnOutline}>Get In Touch</Link>
          <Link to="/contact" className={s.btnFill}>Book a Consultation</Link>
        </div>

        <button
          className={`${s.hamburger} ${open ? s.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span/><span/><span/>
        </button>
      </header>

      <div className={`${s.drawer} ${open ? s.open : ''}`}>
        <Link to="/"        className={s.drawerLink} onClick={close}>Projects</Link>
        <Link to="/about"   className={s.drawerLink} onClick={close}>About</Link>
        <Link to="/contact" className={s.drawerLink} onClick={close}>Contact</Link>
        <div className={s.drawerActions}>
          <Link to="/contact" className={`${s.drawerBtn} ${s.drawerBtnOutline}`} onClick={close}>Get In Touch</Link>
          <Link to="/contact" className={`${s.drawerBtn} ${s.drawerBtnFill}`}    onClick={close}>Book a Consultation</Link>
        </div>
      </div>
    </>
  )
}
