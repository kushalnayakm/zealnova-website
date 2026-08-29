import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta-title">Ready to Move Forward with Technology?</h2>
          <p className="cta-text">
            Let&apos;s discuss how ZealNova can help with your technology, infrastructure
            and digital transformation needs.
          </p>
          <Link to="/contact" className="btn btn-white">
            Talk to ZealNova <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
