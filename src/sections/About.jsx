import './About.css'

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '10+', label: 'Projects shipped' },
  { value: '5+', label: 'Tech stacks' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__left">
          <span className="section-label">About</span>
          <h2 className="about__heading">
            I make things<br />
            <em>that make sense.</em>
          </h2>
          <div className="about__stats">
            {stats.map(s => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about__right">
          <p>
            I'm a full-stack developer based in India who builds end-to-end web
            applications — from database schemas to deployed frontends. I'm most
            comfortable working across the whole stack: React UIs, Node.js APIs,
            and relational databases like MySQL and PostgreSQL.
          </p>
          <p>
            Recent work includes MediTrack, a hospital management system with
            role-based auth, prescription workflows, and Razorpay payments —
            and ShopSphere, a PostgreSQL deep-dive project exploring
            partitioning, triggers, and stored procedures.
          </p>
          <p>
            When I'm not shipping features, I'm learning the next layer of the
            stack — currently getting into Docker, CI/CD pipelines, and cloud
            deployment.
          </p>
          <div className="about__links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
