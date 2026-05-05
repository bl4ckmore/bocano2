import { useState } from 'react'
import { PROJECTS } from '../data'
import s from './ProjectsPage.module.css'

const PH_COLORS = [
  ['#c4ccd8','#b0bac8'], ['#d0c8bc','#bab0a4'], ['#b8c4b4','#a4b0a0'],
  ['#c8c0b4','#b4a89c'], ['#b4bcc8','#a0aab8'], ['#ccc4b8','#b8aca0'],
  ['#bcc8c0','#a8b4ac'], ['#c8c4c0','#b4b0ac'],
]

function Placeholder({ index }) {
  const [bg, fg] = PH_COLORS[index % PH_COLORS.length]
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="400" height="300" fill={bg}/>
      <rect x="30" y="40" width="340" height="220" fill={fg} opacity="0.45" rx="2"/>
      <rect x="60" y="10" width="50" height="270" fill={fg} opacity="0.4"/>
      <rect x="180" y="5" width="90" height="275" fill={fg} opacity="0.35"/>
      <rect x="310" y="30" width="60" height="240" fill={fg} opacity="0.4"/>
      <rect x="0" y="250" width="400" height="50" fill={fg} opacity="0.55"/>
    </svg>
  )
}

const INITIAL_COUNT = 8

export default function ProjectsPage({ onOpen }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT)
  const hasMore = PROJECTS.length > INITIAL_COUNT

  return (
    <main id="projects" className={s.page}>
      <div className={s.grid}>
        {visible.map((project, i) => (
          <div
            key={project.id}
            className={s.cell}
            onClick={() => onOpen(project)}
          >
            <div className={s.imgWrap}>
              {project.cover
                ? <img src={project.cover} alt={project.name} className={i === 0 ? s.imgContain : s.img} loading={i < 4 ? 'eager' : 'lazy'} decoding="async"/>
                : <Placeholder index={i}/>
              }
              <div className={s.overlay}>
                <span className={s.name}>{project.name}</span>
                <span className={s.meta}>{project.type} · {project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All / Show Less */}
      <div className={s.seeAllWrap}>
        {hasMore && !showAll ? (
          <button className={s.seeAll} onClick={() => setShowAll(true)}>
            See All Projects <span className={s.arrow}>↗</span>
          </button>
        ) : showAll ? (
          <button className={s.seeAll} onClick={() => setShowAll(false)}>
            Show Less ↑
          </button>
        ) : null}
      </div>
    </main>
  )
}