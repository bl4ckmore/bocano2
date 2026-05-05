import { useState } from 'react'
import s from './ProjectDetail.module.css'
import { useLang } from '../LangContext'

const PH_COLORS = [
  ['#c4ccd8','#b0bac8'], ['#d0c8bc','#bab0a4'], ['#b8c4b4','#a4b0a0'],
  ['#c8c0b4','#b4a89c'], ['#b4bcc8','#a0aab8'], ['#ccc4b8','#b8aca0'],
  ['#bcc8c0','#a8b4ac'], ['#c8c4c0','#b4b0ac'],
]

function Placeholder({ index }) {
  const [bg, fg] = PH_COLORS[index % PH_COLORS.length]
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="800" height="500" fill={bg}/>
      <rect x="40" y="60" width="720" height="380" fill={fg} opacity="0.4" rx="2"/>
      <rect x="80" y="20" width="80" height="460" fill={fg} opacity="0.35"/>
      <rect x="320" y="10" width="160" height="470" fill={fg} opacity="0.3"/>
      <rect x="580" y="40" width="100" height="440" fill={fg} opacity="0.35"/>
      <rect x="0" y="420" width="800" height="80" fill={fg} opacity="0.5"/>
    </svg>
  )
}

export default function ProjectDetail({ project }) {
  const { lang } = useLang()
  const [lightbox, setLightbox] = useState(null)

  const hasPhotos = project.gallery && project.gallery.length > 0
  const displayCount = hasPhotos ? project.gallery.length : 6

  const closeLightbox = () => setLightbox(null)
  const prevPhoto = () => setLightbox(i => (i - 1 + displayCount) % displayCount)
  const nextPhoto = () => setLightbox(i => (i + 1) % displayCount)

  const renderPhoto = (i, extraClass = '') => (
    <div
      key={i}
      className={`${s.photo} ${extraClass}`}
      onClick={() => setLightbox(i)}
    >
      {hasPhotos
        ? <img src={project.gallery[i]} alt={`${project.name[lang]} ${i + 1}`} className={s.img} loading={i === 0 ? 'eager' : 'lazy'} decoding="async"/>
        : <Placeholder index={i}/>
      }
      <div className={s.photoOverlay}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </div>
    </div>
  )

  const restCount = Math.max(0, displayCount - 3)

  return (
    <main className={s.page}>

      <div className={s.header}>
        <div className={s.meta}>
          <span className={s.type}>{project.type[lang]}</span>
          <span className={s.dot}>·</span>
          <span className={s.year}>{project.year}</span>
        </div>
        <h1 className={s.title}>{project.name[lang]}</h1>
      </div>

      {/* Featured: photo 1 left (full height), photos 2+3 right stacked */}
      <div className={s.featured}>
        {renderPhoto(0, s.featuredMain)}
        {displayCount > 1 && renderPhoto(1)}
        {displayCount > 2 && renderPhoto(2)}
      </div>

      {/* Remaining photos in 4-col grid */}
      {restCount > 0 && (
        <div className={s.gallery}>
          {Array.from({ length: restCount }).map((_, i) => renderPhoto(i + 3))}
        </div>
      )}

      {lightbox !== null && (
        <div className={s.lightbox} onClick={closeLightbox}>
          <button className={s.lbClose} onClick={closeLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <button className={`${s.lbArrow} ${s.lbPrev}`} onClick={e => { e.stopPropagation(); prevPhoto() }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className={s.lbImgWrap} onClick={e => e.stopPropagation()}>
            {hasPhotos
              ? <img src={project.gallery[lightbox]} alt="" className={s.lbImg}/>
              : <Placeholder index={lightbox}/>
            }
          </div>

          <button className={`${s.lbArrow} ${s.lbNext}`} onClick={e => { e.stopPropagation(); nextPhoto() }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <div className={s.lbCount}>{lightbox + 1} / {displayCount}</div>
        </div>
      )}
    </main>
  )
}
