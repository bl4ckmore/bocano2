import { useState, useCallback } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import About from './components/About'
import Contact from './components/Contact'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  const [activeProject, setActiveProject] = useState(null)
  const [fading, setFading] = useState(false)

  const openProject = useCallback((project) => {
    setFading(true)
    setTimeout(() => {
      setActiveProject(project)
      setFading(false)
      window.scrollTo({ top: 0 })
    }, 280)
  }, [])

  const closeProject = useCallback(() => {
    setFading(true)
    setTimeout(() => {
      setActiveProject(null)
      setFading(false)
      window.scrollTo({ top: 0 })
    }, 280)
  }, [])

  return (
    <>
      <Nav onBack={activeProject ? closeProject : null} />
      <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.28s ease' }}>
        {activeProject
          ? <ProjectDetail project={activeProject} onBack={closeProject} />
          : (
            <>
              <ProjectsPage onOpen={openProject} />
              <About />
              <Contact />
            </>
          )
        }
      </div>
      <Footer />
    </>
  )
}