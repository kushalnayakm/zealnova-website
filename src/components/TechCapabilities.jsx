import { motion } from 'framer-motion'
import {
  Cloud,
  Shield,
  Network,
  Code2,
  Bot,
  Database,
  BarChart3,
  Server,
  Lightbulb,
} from 'lucide-react'

const technologies = [
  { icon: Cloud, label: 'Cloud Solutions' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Network, label: 'IT Networking' },
  { icon: Code2, label: 'Software Development' },
  { icon: Bot, label: 'AI & Automation' },
  { icon: Database, label: 'ERP Solutions' },
  { icon: BarChart3, label: 'Data & Analytics' },
  { icon: Server, label: 'IT Infrastructure' },
  { icon: Lightbulb, label: 'IT Consulting' },
]

export default function TechCapabilities() {
  return (
    <section className="section tech-capabilities">
      <img
        src="/ZnLogoNew.png"
        alt=""
        className="tech-watermark"
        width={400}
        height={298}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <svg className="tech-bg-lines" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
        <motion.line
          x1="0" y1="300" x2="1200" y2="300"
          stroke="#68CBFA" strokeWidth="1"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.line
          x1="0" y1="200" x2="1200" y2="400"
          stroke="#0E86EE" strokeWidth="0.5"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.line
          x1="0" y1="400" x2="1200" y2="200"
          stroke="#0E86EE" strokeWidth="0.5"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </svg>

      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">Technology Capabilities</span>
          <h2 className="section-title">Built on a Foundation of Modern Technology</h2>
          <p className="section-subtitle">
            Technology solutions for businesses, institutions, government organizations
            and other entities — from infrastructure and security to software, data
            and intelligent automation.
          </p>
        </motion.div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.label}
              className="tech-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <tech.icon size={22} aria-hidden="true" />
              <span>{tech.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
