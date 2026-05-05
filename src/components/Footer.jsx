import { SITE } from '../data'
import s from './Footer.module.css'

export default function Footer() {
  const { contact } = SITE
  return (
    <footer id="contact" className={s.footer}>
      <div className={s.top}>
        <div className={s.brand}>
          <a href="#hero">
            <img src="src/assets/bocanoL.png" alt="Bocano Architecture" className={s.logoImg}/>
          </a>
        </div>
        <div className={s.links}>
          <a href={`tel:${contact.phone}`} className={s.item}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`} className={s.item}>{contact.email}</a>
          <span className={s.item}>{contact.city}</span>
        </div>
        <div className={s.socials}>
          <a href={contact.facebook} target="_blank" rel="noreferrer" className={s.social}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href={contact.instagram} target="_blank" rel="noreferrer" className={s.social}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={s.bottom}>
        <span>&copy; {new Date().getFullYear()} Bocano Architecture. All rights reserved.</span>
      </div>
    </footer>
  )
}