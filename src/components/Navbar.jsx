import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container navbar-inner">
        <Link to="/" className="navbar-logo" aria-label="ZealNova Technologies - Home">
          <img
            src="/ZnLogoNew.png"
            alt=""
            className="navbar-logo-icon"
            width={56}
            height={42}
            decoding="async"
            aria-hidden="true"
          />
          <div className="navbar-logo-text">
            <span className="navbar-brand-name">
              <span className="zeal">Zeal</span>
              <span className="nova">Nova</span>
            </span>
            <span className="navbar-brand-sub">Technologies Private Limited</span>
            <span className="navbar-brand-tagline">Technology That Moves You Forward.</span>
          </div>
          <img
            src="/ZnLogoNew.png"
            alt="ZealNova"
            className="navbar-logo-mobile"
            width={120}
            height={89}
            decoding="async"
            fetchPriority="high"
          />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={isActive(item.to) ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-primary nav-cta">
          Let&apos;s Talk <ArrowRight size={16} aria-hidden="true" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mobile-menu open"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary nav-cta" onClick={() => setMobileOpen(false)}>
              Let&apos;s Talk <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
