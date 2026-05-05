import { PROJECTS } from '../data'
import s from './ProjectsPage.module.css'

export default function ProjectsPage({ onOpen }) {
  return (
    <main id="projects" className={s.page}>
      <div className={s.grid}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className={`${s.cell} ${i === 0 ? s.cellLarge : ''}`}
            onClick={() => onOpen(project)}
          >
            {project.cover
              ? <img
                  src={project.cover}
                  alt={project.name}
                  className={s.img}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              : <div className={s.placeholder} />
            }
            <div className={s.overlay}>
              <span className={s.name}>{project.name}</span>
              <span className={s.meta}>{project.type} · {project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
