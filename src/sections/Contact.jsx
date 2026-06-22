import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Wire up to EmailJS or Formspree in production
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__left">
          <span className="section-label">Contact</span>
          <h2 className="contact__heading">
            Let's build<br />
            <em>something together.</em>
          </h2>
          <p className="contact__note">
            Open to full-time roles, freelance projects, and interesting
            collaborations. I typically respond within 24 hours.
          </p>
          <div className="contact__reach">
            <a href="mailto:gowtham@example.com">gowtham@example.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div className="contact__right">
          {sent ? (
            <div className="contact__success">
              <span>✓</span>
              <p>Message sent. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact__submit">Send message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
