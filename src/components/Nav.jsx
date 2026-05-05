import { useState } from 'react'
import s from './Nav.module.css'

// ── Logo: import from src/assets/ or use public/ path ──
// Option A (src/assets/):  import logo from '../assets/bocanoL.png'
// Option B (public/):      const logo = '/bocanoL.png'
import logo from '../assets/bocanoL.png'

export default function Nav({ onBack }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className={s.header}>
        <a href="#top" className={s.logo} onClick={close}>
          <img src={logo} alt="Bocano Architecture" className={s.logoImg}/>
        </a>

        {onBack ? (
          <button className={s.backBtn} onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Projects
          </button>
        ) : (
          <>
            <nav className={s.nav}>
              <a href="#projects" className={s.link}>Projects</a>
              <a href="#about"    className={s.link}>About</a>
              <a href="#contact"  className={s.link}>Contact</a>
            </nav>
            <div className={s.actions}>
              <a href="#contact" className={s.btnOutline}>Get In Touch</a>
              <a href="#contact" className={s.btnFill}>Book a Consultation</a>
            </div>
          </>
        )}

        <button
          className={`${s.hamburger} ${open ? s.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span/><span/><span/>
        </button>
      </header>

      <div className={`${s.drawer} ${open ? s.open : ''}`}>
        {onBack ? (
          <button className={s.drawerBack} onClick={() => { close(); onBack() }}>
            ← Back to Projects
          </button>
        ) : (
          <>
            <a href="#projects" className={s.drawerLink} onClick={close}>Projects</a>
            <a href="#about"    className={s.drawerLink} onClick={close}>About</a>
            <a href="#contact"  className={s.drawerLink} onClick={close}>Contact</a>
            <div className={s.drawerActions}>
              <a href="#contact" className={`${s.drawerBtn} ${s.drawerBtnOutline}`} onClick={close}>Get In Touch</a>
              <a href="#contact" className={`${s.drawerBtn} ${s.drawerBtnFill}`}    onClick={close}>Book a Consultation</a>
            </div>
          </>
        )}
      </div>
    </>
  )
}