import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="hero-eyebrow">ZealNova Technologies</p>
              <h1 className="hero-title">
                Technology Beyond <span>Limits.</span>
              </h1>
              <p className="hero-description">
                End-to-end technology solutions across software development, IT infrastructure,
                networking, cloud, cybersecurity, automation and digital transformation.
              </p>
              <div className="hero-actions">
                <Link to="/services" className="btn btn-primary">
                  Explore Our Services <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Talk to Us <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            >
              <div className="hero-visual-frame">
                <HeroVisual />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
