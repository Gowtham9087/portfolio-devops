import './Projects.css'

const projects = [
  {
    title: 'MediTrack',
    year: '2026',
    desc: 'Full-stack hospital management system with role-based auth (admin, doctor, patient), prescription workflows, and Razorpay payment integration.',
    stack: ['React', 'Node.js', 'MySQL', 'Sequelize', 'Razorpay'],
    links: { live: 'https://meditrack.vercel.app', github: 'https://github.com' },
    featured: true,
  },
  {
    title: 'FinTrack',
    year: '2026',
    desc: 'Personal finance tracker with Redux Toolkit, custom SVG charts, CSV export, and an AI chat assistant powered by the Claude API.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Claude API'],
    links: { live: '#', github: 'https://github.com' },
    featured: true,
  },
  {
    title: 'ShopSphere',
    year: '2026',
    desc: 'PostgreSQL deep-dive — multi-vendor e-commerce schema with partitioning, triggers, stored procedures, and a star schema for analytics.',
    stack: ['PostgreSQL 16', 'SQL', 'Node.js'],
    links: { github: 'https://github.com' },
    featured: false,
  },
  {
    title: 'TeamTalk Chat',
    year: '2026',
    desc: 'Real-time group chat application with Socket.io, rooms, typing indicators, and persistent message history.',
    stack: ['React', 'Socket.io', 'Express', 'MongoDB'],
    links: { github: 'https://github.com' },
    featured: false,
  },
  {
    title: 'Student Course API',
    year: '2025',
    desc: 'RESTful API for managing students and course enrollments, with CRUD operations, validation, and pagination.',
    stack: ['Node.js', 'Express', 'MySQL'],
    links: { github: 'https://github.com' },
    featured: false,
  },
  {
    title: 'Birthday Surprise',
    year: '2025',
    desc: 'Space-themed interactive 9-screen web experience built as a birthday surprise — animated with Framer Motion.',
    stack: ['React', 'Vite', 'Framer Motion'],
    links: { github: 'https://github.com' },
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="projects__heading">Things I've built</h2>

        <div className="projects__featured">
          {projects.filter(p => p.featured).map(p => (
            <div key={p.title} className="project-card project-card--featured">
              <div className="project-card__header">
                <span className="project-card__year">{p.year}</span>
                <div className="project-card__links">
                  {p.links.live && <a href={p.links.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                </div>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__stack">
                {p.stack.map(t => <span key={t} className="project-card__tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="projects__grid">
          {projects.filter(p => !p.featured).map(p => (
            <div key={p.title} className="project-card">
              <div className="project-card__header">
                <span className="project-card__year">{p.year}</span>
                <div className="project-card__links">
                  {p.links.live && <a href={p.links.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                </div>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__stack">
                {p.stack.map(t => <span key={t} className="project-card__tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
