import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import * as Sentry from '@sentry/react'

export default function App() {
  return (
    <Sentry.ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </Sentry.ErrorBoundary>
  )
}