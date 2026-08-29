import { useEffect, useId, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Network,
  Cloud,
  Shield,
  Puzzle,
  Bot,
  BarChart3,
  Headphones,
  HardDrive,
  KeyRound,
  GraduationCap,
  ArrowRight,
  ChevronUp,
  Check,
  Search,
  PenLine,
  Link2,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    name: 'Software Development',
    description:
      'Web applications, mobile applications, enterprise applications and customized software tailored to your business requirements.',
    capabilities: [
      'Web Applications',
      'Mobile Applications',
      'Enterprise Applications',
      'Custom Software',
      'Application Customization',
    ],
  },
  {
    icon: Network,
    name: 'IT Infrastructure & Networking',
    description:
      'LAN, WAN, Wi-Fi, SD-WAN, routers, switches, servers, storage and data-centre infrastructure design and implementation.',
    capabilities: [
      'LAN, WAN & Wi-Fi',
      'SD-WAN',
      'Routers & Switches',
      'Servers & Storage',
      'Data-Centre Infrastructure',
    ],
  },
  {
    icon: Cloud,
    name: 'Cloud Solutions',
    description:
      'Cloud migration, hosting, SaaS, IaaS, PaaS, backup and disaster recovery for reliable, scalable operations.',
    capabilities: [
      'Cloud Migration',
      'Cloud Hosting',
      'SaaS, IaaS & PaaS',
      'Backup Solutions',
      'Disaster Recovery',
    ],
  },
  {
    icon: Shield,
    name: 'Cybersecurity',
    description:
      'Network security, endpoint protection, firewalls, vulnerability management and comprehensive security solutions.',
    capabilities: [
      'Network Security',
      'Endpoint Protection',
      'Firewalls',
      'Vulnerability Management',
      'Security Solutions',
    ],
  },
  {
    icon: Puzzle,
    name: 'System Integration & ERP Solutions',
    description:
      'ERP, APIs, databases and third-party system integration including Oracle and SAP implementation, customization and support.',
    capabilities: [
      'ERP Solutions',
      'API Integration',
      'Database Integration',
      'Oracle & SAP Implementation',
      'Customization & Support',
    ],
  },
  {
    icon: Bot,
    name: 'AI, Automation & Digital Transformation',
    description:
      'Artificial intelligence, machine learning, RPA, workflow automation, portals and enterprise digital solutions.',
    capabilities: [
      'Artificial Intelligence',
      'Machine Learning',
      'RPA & Workflow Automation',
      'Portals',
      'Enterprise Digital Solutions',
    ],
  },
  {
    icon: BarChart3,
    name: 'Data & Analytics',
    description:
      'BI dashboards, data warehousing, data lakes, analytics and reporting to drive informed business decisions.',
    capabilities: [
      'BI Dashboards',
      'Data Warehousing',
      'Data Lakes',
      'Analytics',
      'Business Reporting',
    ],
  },
  {
    icon: Headphones,
    name: 'Managed IT Services & IT Consulting',
    description:
      'AMC, remote support, infrastructure monitoring, helpdesk, maintenance, IT consulting, architecture and project management.',
    capabilities: [
      'AMC & Maintenance',
      'Remote Support & Helpdesk',
      'Infrastructure Monitoring',
      'IT Consulting',
      'Architecture & Project Management',
    ],
  },
  {
    icon: HardDrive,
    name: 'Hardware Supply',
    description:
      'Supply, installation, configuration and maintenance of servers, computers, networking devices, storage systems and related IT equipment.',
    capabilities: [
      'Servers & Computers',
      'Networking Devices',
      'Switches, Routers & Firewalls',
      'Storage Systems',
      'Security & Communication Equipment',
    ],
  },
  {
    icon: KeyRound,
    name: 'Software Licensing',
    description:
      'Reselling and licensing of software, subscriptions and cloud services.',
    capabilities: [
      'Software Licensing',
      'Software Reselling',
      'Subscriptions',
      'Cloud Services Licensing',
    ],
  },
  {
    icon: GraduationCap,
    name: 'Training',
    description:
      'Corporate IT, software and networking training and related technical services.',
    capabilities: [
      'Corporate IT Training',
      'Software Training',
      'Networking Training',
      'Technical Services',
    ],
  },
]

const workflowSteps = [
  {
    step: '01',
    label: 'Understand',
    micro: 'Discover your needs and requirements',
    icon: Search,
  },
  {
    step: '02',
    label: 'Design',
    micro: 'Plan the right solution strategy',
    icon: PenLine,
  },
  {
    step: '03',
    label: 'Implement',
    micro: 'Build and implement the solution',
    icon: Code2,
  },
  {
    step: '04',
    label: 'Integrate',
    micro: 'Connect everything',
    icon: Link2,
  },
  {
    step: '05',
    label: 'Support',
    micro: 'Maintain, support and optimize',
    icon: Headphones,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

/** ~2.5s per stage → full 01→05 cycle ≈ 12.5s */
const WORKFLOW_STEP_MS = 2500

export default function Services() {
  const [expanded, setExpanded] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [flowEnabled, setFlowEnabled] = useState(true)
  const baseId = useId()

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => {
      setFlowEnabled(!media.matches)
      if (media.matches) setActiveStep(0)
    }

    syncMotion()
    media.addEventListener('change', syncMotion)
    return () => media.removeEventListener('change', syncMotion)
  }, [])

  useEffect(() => {
    if (!flowEnabled) return undefined

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % workflowSteps.length)
    }, WORKFLOW_STEP_MS)

    return () => window.clearInterval(timer)
  }, [flowEnabled])

  const toggleService = (name) => {
    setExpanded((current) => (current === name ? null : name))
  }

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">Technology Solutions for Every Layer of Your Business</h2>
          <p className="section-subtitle">
            From infrastructure to applications, ZealNova delivers integrated technology
            capabilities designed to support your operations, security and growth.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => {
            const isOpen = expanded === service.name
            const detailsId = `${baseId}-${service.name.replace(/\s+/g, '-').toLowerCase()}`

            return (
              <motion.article
                key={service.name}
                className={`service-card${isOpen ? ' is-expanded' : ''}`}
                variants={cardVariants}
              >
                <div className="service-icon">
                  <service.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.description}</p>

                <div
                  id={detailsId}
                  className={`service-details${isOpen ? ' is-open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="service-details-inner">
                    <p className="service-details-label">What We Do</p>
                    <ul className="service-capability-list">
                      {service.capabilities.map((item) => (
                        <li key={item}>
                          <Check size={14} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  className="service-toggle"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() => toggleService(service.name)}
                >
                  {isOpen ? (
                    <>
                      Hide Details <ChevronUp size={14} aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      View Capabilities <ArrowRight size={14} aria-hidden="true" />
                    </>
                  )}
                </button>
              </motion.article>
            )
          })}
        </motion.div>

        <div className="services-help">
          <span className="section-eyebrow">How We Help</span>
          <p>
            From planning and implementation to integration, modernization and ongoing support,
            ZealNova helps organizations build and manage technology environments that support
            their business needs.
          </p>
        </div>

        <div
          className={`services-workflow${flowEnabled ? ' services-workflow--flow' : ''}`}
          aria-label="How ZealNova works"
        >
          <div className="services-workflow-stages">
            {workflowSteps.map((item, index) => {
              const isActive = flowEnabled && activeStep === index
              const isCompleted = flowEnabled && index < activeStep
              const isPending = flowEnabled && index > activeStep
              const connectorClass = !flowEnabled
                ? ''
                : activeStep > index
                  ? ' is-complete'
                  : activeStep === index
                    ? ' is-flowing'
                    : ' is-pending'
              const Icon = item.icon
              const stepClass = [
                'services-workflow-step',
                isActive ? 'is-active' : '',
                isCompleted ? 'is-completed' : '',
                isPending ? 'is-pending' : '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <div key={item.step} className={stepClass}>
                  <span className="services-workflow-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2} />
                  </span>

                  <div className="services-workflow-rail">
                    <span className="services-workflow-marker" aria-hidden="true">
                      {isCompleted ? <Check size={11} strokeWidth={3} /> : null}
                    </span>
                    {index < workflowSteps.length - 1 && (
                      <span className={`services-workflow-connector${connectorClass}`}>
                        <span className="services-workflow-track" />
                        <span className="services-workflow-fill" />
                      </span>
                    )}
                  </div>

                  <div className="services-workflow-copy">
                    <p className="services-workflow-title">
                      <span className="services-workflow-number">{item.step}</span>
                      <span className="services-workflow-label">{item.label}</span>
                    </p>
                    <p className="services-workflow-micro">{item.micro}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="services-workflow-badge">
            <span className="services-workflow-badge-dot" aria-hidden="true" />
            Building success together at every step
          </p>
        </div>
      </div>
    </section>
  )
}
