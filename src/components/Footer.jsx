import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Gowtham · {new Date().getFullYear()}</span>
        <span className="footer__note">Built with React + Vite</span>
      </div>
    </footer>
  )
}
