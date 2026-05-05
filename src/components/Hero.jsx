import { SITE } from '../data'
import s from './Hero.module.css'

// Architectural placeholder illustration
function HeroPhoto() {
  return (
    <svg viewBox="0 0 620 520" xmlns="http://www.w3.org/2000/svg" className={s.phSvg}>
      <rect width="620" height="520" fill="#c8cdd8"/>
      {/* Sky */}
      <rect width="620" height="280" fill="#d8dde8"/>
      {/* Building — perspective lines */}
      <polygon points="310,40 580,200 580,520 310,520" fill="#b0b8c8"/>
      <polygon points="310,40 60,160 60,520 310,520" fill="#c8d0de"/>
      {/* Horizontal floor lines right face */}
      {[200,240,280,320,360,400,440,480].map((y,i)=>(
        <line key={i} x1="310" y1={40+(y-200)*((y-40)/480)} x2="580" y2={y} stroke="#a0a8b8" strokeWidth="0.8"/>
      ))}
      {/* Horizontal floor lines left face */}
      {[160,200,240,280,320,360,400,440,480].map((y,i)=>(
        <line key={i} x1="310" y1={40+(y-160)*((y-40)/480)} x2="60" y2={y} stroke="#b8c0ce" strokeWidth="0.8"/>
      ))}
      {/* Window grid right */}
      {[0,1,2,3,4,5,6].map(row=>
        [0,1,2,3].map(col=>(
          <rect key={`r${row}${col}`}
            x={326+col*60} y={210+row*46}
            width="44" height="34"
            fill="#9098a8" opacity="0.6"/>
        ))
      )}
      {/* Vertical lines left face */}
      {[100,150,200,250].map((x,i)=>(
        <line key={i} x1={x} y1={155+(310-x)*0.36} x2={x} y2="520" stroke="#b0b8c8" strokeWidth="0.7"/>
      ))}
      {/* Ground */}
      <rect x="0" y="490" width="620" height="30" fill="#a8b0be"/>
    </svg>
  )
}

export default function Hero() {
  const { hero } = SITE
  return (
    <section id="hero" className={s.section}>
      {/* Left — text */}
      <div className={s.left}>
        <h1 className={s.headline}>
          {hero.headline.map((line, i) => <span key={i} className={s.hline}>{line}</span>)}
        </h1>
        <p className={s.sub}>{hero.sub}</p>
        <div className={s.btns}>
          <a href="#contact" className={s.btnFill}>Book a Consultation</a>
          <a href="#contact" className={s.btnOutline}>Get In Touch</a>
        </div>
      </div>

      {/* Right — photo */}
      <div className={s.right}>
        {hero.photo
          ? <img src={hero.photo} alt="Architecture" className={s.photo}/>
          : <HeroPhoto />
        }
      </div>
    </section>
  )
}
