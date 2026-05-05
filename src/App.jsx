import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function AppContent() {
  const [activeProject, setActiveProject] = useState(null)
  const [fading, setFading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') setActiveProject(null)
  }, [location.pathname])

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
      <ScrollToTop />
      <Nav onLogoClick={activeProject ? closeProject : null} />
      <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.28s ease' }}>
        <Routes>
          <Route path="/" element={
            activeProject
              ? <ProjectDetail project={activeProject} />
              : <ProjectsPage onOpen={openProject} />
          } />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
