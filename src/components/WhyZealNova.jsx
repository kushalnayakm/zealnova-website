import { motion } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'End-to-End Technology',
    description:
      'From infrastructure and networking to software, cloud and cybersecurity — comprehensive technology solutions under one roof.',
  },
  {
    number: '02',
    title: 'Business-Focused Solutions',
    description:
      'Technology designed and implemented around your operational needs, business processes and long-term objectives.',
  },
  {
    number: '03',
    title: 'Integrated IT Capabilities',
    description:
      'Seamless integration across systems, platforms and technologies to create cohesive, efficient IT environments.',
  },
  {
    number: '04',
    title: 'Long-Term Technical Support',
    description:
      'Managed services, maintenance, monitoring and ongoing support to keep your technology running reliably.',
  },
]

export default function WhyZealNova() {
  return (
    <section className="section section-light">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">Why ZealNova</span>
          <h2 className="section-title">Your Technology Partner for the Road Ahead</h2>
        </motion.div>

        <div className="why-grid">
          {values.map((item, index) => (
            <motion.div
              key={item.number}
              className="why-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="why-number" aria-hidden="true">{item.number}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
