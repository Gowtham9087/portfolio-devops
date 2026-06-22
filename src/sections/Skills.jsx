import './Skills.css'

const categories = [
  {
    name: 'Frontend',
    skills: ['React', 'Vite', 'TypeScript', 'Redux Toolkit', 'Framer Motion', 'CSS / Tailwind'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Sequelize', 'Socket.io'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis (learning)', 'Stored procedures', 'Query optimization'],
  },
  {
    name: 'DevOps & tools',
    skills: ['Docker (learning)', 'GitHub Actions', 'Vercel', 'Render', 'Railway', 'Git'],
  },
  {
    name: 'Integrations',
    skills: ['Razorpay', 'Gemini API', 'Anthropic Claude API', 'Sentry', 'Domo DDX'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="skills__heading">What I work with</h2>
        <div className="skills__grid">
          {categories.map(cat => (
            <div key={cat.name} className="skills__category">
              <h3 className="skills__cat-name">{cat.name}</h3>
              <ul className="skills__list">
                {cat.skills.map(skill => (
                  <li key={skill} className="skills__item">
                    <span className="skills__dot" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
