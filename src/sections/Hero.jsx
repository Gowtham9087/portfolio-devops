import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['Full Stack Developer', 'React Enthusiast', 'Node.js Builder', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pause | erasing

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1800)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 400)
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, roleIndex])

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__tag">Based in India · Open to work</div>
        <h1 className="hero__name">Gowtham</h1>
        <div className="hero__role">
          <span>{displayed}</span>
          <span className="hero__cursor" aria-hidden="true">|</span>
        </div>
        <p className="hero__bio">
          I build full-stack web applications — from pixel-perfect UIs to
          production-ready APIs. Currently focused on React, Node.js, and
          shipping things that actually work.
        </p>
        <div className="hero__actions">
          <a
            className="hero__btn hero__btn--primary"
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View projects
          </a>
          <a
            className="hero__btn hero__btn--ghost"
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Get in touch
          </a>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  )
}
