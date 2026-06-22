import './Blog.css'

const posts = [
  {
    title: 'How I fixed a Sequelize stale instance bug in production',
    date: 'Jun 2026',
    readTime: '4 min',
    tag: 'Backend',
    excerpt: 'A subtle bug where invoice.update() returned stale data — and why await invoice.reload() saved the day.',
  },
  {
    title: 'Building a real-time chat app with Socket.io and React',
    date: 'May 2026',
    readTime: '6 min',
    tag: 'Fullstack',
    excerpt: 'From a blank Vite project to live typing indicators and persistent rooms — a step by step walkthrough.',
  },
  {
    title: 'PostgreSQL partitioning: why ShopSphere needed it',
    date: 'Jun 2026',
    readTime: '5 min',
    tag: 'Database',
    excerpt: 'Range partitioning on order_date cut query time by 80% on a 10M-row orders table. Here\'s how.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <span className="section-label">Blog</span>
        <h2 className="blog__heading">Things I've learned</h2>
        <div className="blog__list">
          {posts.map((post, i) => (
            <article key={i} className="blog__post">
              <div className="blog__post-meta">
                <span className="blog__tag">{post.tag}</span>
                <span className="blog__date">{post.date} · {post.readTime} read</span>
              </div>
              <h3 className="blog__post-title">{post.title}</h3>
              <p className="blog__post-excerpt">{post.excerpt}</p>
              <a className="blog__post-link" href="#">Read more →</a>
            </article>
          ))}
        </div>
        <p className="blog__coming-soon">More posts coming soon — I write about things I actually run into.</p>
      </div>
    </section>
  )
}
