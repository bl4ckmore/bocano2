import { SITE } from '../data'
import s from './About.module.css'
import aboutPhoto from '../assets/aboutus.jpg'

export default function About() {
  const { about } = SITE
  return (
    <section id="about" className={s.section}>

      {/* Photo first — full width at the top */}
      <div className={s.photoWrap}>
        <img src={aboutPhoto} alt="Studio" className={s.photo}/>
      </div>

      {/* Text below */}
      <div className={s.content}>
        <h2 className={`${s.heading} reveal`}>{about.headline}</h2>
        <div className={s.cols}>
          {about.body.map((p, i) => (
            <p key={i} className={`${s.para} reveal d${i+1}`}>{p}</p>
          ))}
        </div>
        <p className={`${s.services} reveal d3`}>
          Our team provides <strong>{about.services}</strong> for medium and large-scale projects.
        </p>
      </div>

    </section>
  )
}