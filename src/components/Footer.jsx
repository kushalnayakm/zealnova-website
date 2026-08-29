import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/2(1).png"
              alt="ZealNova Technologies Private Limited"
              width={360}
              height={360}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <p>
              #480, K. No. 862/480, 5 Singasandra<br />
              Bangalore 560068, Karnataka
            </p>
            <p>
              <a href="tel:+918618026148">8618026148</a>
            </p>
            <p>
              <a href="mailto:services@zealnova.in">services@zealnova.in</a>
            </p>
            <p>
              <a href="https://zealnova.in" target="_blank" rel="noopener noreferrer">
                zealnova.in
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ZealNova Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
