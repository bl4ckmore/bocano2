import { PROJECTS } from '../data'
import s from './ProjectsPage.module.css'
import { useLang } from '../LangContext'

export default function ProjectsPage({ onOpen }) {
  const { lang } = useLang()
  return (
    <main id="projects" className={s.page}>
      <div className={s.grid}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className={`${s.cell} ${i % 3 === 0 ? s.cellLarge : ''}`}
            onClick={() => onOpen(project)}
          >
            {project.cover
              ? <img
                  src={project.cover}
                  alt={project.name[lang]}
                  className={s.img}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              : <div className={s.placeholder} />
            }
            <div className={s.overlay}>
              <span className={s.name}>{project.name[lang]}</span>
              <span className={s.meta}>{project.type[lang]} · {project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
