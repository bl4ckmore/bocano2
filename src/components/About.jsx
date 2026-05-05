import { SITE } from '../data'
import s from './About.module.css'
import aboutPhoto from '../assets/aboutus.jpg'
import { useLang } from '../LangContext'
import { translations } from '../i18n'

export default function About() {
  const { lang } = useLang()
  const tr = translations[lang].about
  const { about } = SITE
  return (
    <section id="about" className={s.section}>
      <div className={s.layout}>

        {/* Left — image */}
        <div className={s.photoWrap}>
          <img src={aboutPhoto} alt="Studio" className={s.photo}/>
        </div>

        {/* Right — text */}
        <div className={s.content}>
          <h2 className={`${s.heading} reveal`}>{about.headline[lang]}</h2>
          {about.body[lang].map((p, i) => (
            <p key={i} className={`${s.para} reveal d${i+1}`}>{p}</p>
          ))}
          <p className={`${s.services} reveal d3`}>
            {tr.teamPrefix} <strong>{about.services[lang]}</strong> {tr.teamSuffix}
          </p>
        </div>

      </div>
    </section>
  )
}
