import About from '../components/About'
import { useReveal } from '../hooks/useReveal'

export default function AboutPage() {
  useReveal()
  return <About />
}
