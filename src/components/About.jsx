import { SITE } from '../data'
import s from './About.module.css'

export default function About() {
  const { about } = SITE
  return (
    <section id="about" className={s.section}>

      {/* Photo first — full width at the top */}
      <div className={s.photoWrap}>
        {about.photo
          ? <img src={about.photo} alt="Studio" className={s.photo}/>
          : (
            <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" className={s.phSvg}>
              <rect width="1200" height="460" fill="#dde0e8"/>
              <rect width="1200" height="460" fill="#d0d4de"/>
              {[0,1,2,3,4,5,6,7].map(i=>(
                <rect key={i} x={i*160} y={i%2===0?20:60} width="140" height={i%2===0?420:380} fill="#c0c5d0" opacity="0.55"/>
              ))}
              <text x="600" y="245" textAnchor="middle" fontFamily="Inter" fontSize="13"
                fill="rgba(0,0,0,0.2)" letterSpacing="4">STUDIO PHOTO — add path in data.js</text>
            </svg>
          )
        }
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