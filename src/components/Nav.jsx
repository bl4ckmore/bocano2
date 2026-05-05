import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import logo from '../assets/bocanoL.png'
import { useLang } from '../LangContext'
import { translations } from '../i18n'

export default function Nav({ onLogoClick }) {
  const { lang, setLang } = useLang()
  const tr = translations[lang].nav
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const handleLogo = (e) => {
    close()
    if (onLogoClick) {
      e.preventDefault()
      onLogoClick()
    }
  }

  const LangSwitcher = ({ size }) => (
    <div className={`${s.langSwitcher} ${size === 'lg' ? s.langSwitcherLg : ''}`}>
      <button
        className={`${s.langOpt} ${lang === 'en' ? s.langActive : ''}`}
        onClick={() => setLang('en')}
      >EN</button>
      <button
        className={`${s.langOpt} ${lang === 'ge' ? s.langActive : ''}`}
        onClick={() => setLang('ge')}
      >GE</button>
    </div>
  )

  return (
    <>
      <header className={s.header}>
        <Link to="/" className={s.logo} onClick={handleLogo}>
          <img src={logo} alt="Bocano Architecture" className={s.logoImg}/>
        </Link>

        <nav className={s.nav}>
          <Link to="/"        className={s.link}>{tr.projects}</Link>
          <Link to="/about"   className={s.link}>{tr.about}</Link>
          <Link to="/contact" className={s.link}>{tr.contact}</Link>
        </nav>

        {/* Desktop only — hidden on mobile */}
        <div className={s.actions}>
          <LangSwitcher />
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
        <Link to="/"        className={s.drawerLink} onClick={close}>{tr.projects}</Link>
        <Link to="/about"   className={s.drawerLink} onClick={close}>{tr.about}</Link>
        <Link to="/contact" className={s.drawerLink} onClick={close}>{tr.contact}</Link>
        {/* Language switcher — mobile only, inside burger */}
        <div className={s.drawerLang}>
          <LangSwitcher size="lg" />
        </div>
      </div>
    </>
  )
}
