import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Landmark,
  Building,
  BriefcaseBusiness,
  Eye,
  Target,
  Monitor,
  Network,
  Code2,
  Server,
  Cloud,
  Shield,
  Puzzle,
  Headphones,
  RefreshCw,
  Bot,
  Lightbulb,
  Layers,
  Database,
  BarChart3,
} from 'lucide-react'

const capabilities = [
  { icon: Monitor, label: 'Information Technology' },
  { icon: Network, label: 'IT Networking' },
  { icon: Code2, label: 'Software Development' },
  { icon: Server, label: 'IT Infrastructure' },
  { icon: Cloud, label: 'Cloud Solutions' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Puzzle, label: 'System Integration' },
  { icon: Database, label: 'ERP Solutions' },
  { icon: BarChart3, label: 'Data & Analytics' },
  { icon: Bot, label: 'AI & Automation' },
  { icon: RefreshCw, label: 'Digital Transformation' },
  { icon: Headphones, label: 'Managed IT Services' },
  { icon: Lightbulb, label: 'IT Consulting' },
  { icon: Layers, label: 'Technology Solutions' },
]

const audiences = [
  { icon: Building2, label: 'Businesses' },
  { icon: Landmark, label: 'Institutions' },
  { icon: Building, label: 'Government Organizations' },
  { icon: BriefcaseBusiness, label: 'Other Entities' },
]

const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a trusted technology partner, enabling organizations to grow through innovative, reliable and future-ready technology solutions.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver practical, secure and scalable technology solutions that help organizations build, modernize and manage their digital environments.',
  },
]

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title">Technology Built Around Your Business</h2>

            <p>
              ZealNova Technologies Private Limited delivers end-to-end technology solutions
              across software development, IT infrastructure, networking, cloud, cybersecurity
              and digital transformation.
            </p>
            <p>
              From software and system integration to managed IT services and automation,
              we help organizations build, modernize and manage their technology environments.
            </p>

            <div className="about-pillars">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="about-pillar-card">
                  <div className="about-pillar-icon" aria-hidden="true">
                    <pillar.icon size={20} />
                  </div>
                  <h3 className="about-pillar-title">{pillar.title}</h3>
                  <p className="about-pillar-text">{pillar.text}</p>
                </article>
              ))}
            </div>

            <Link to="/services" className="about-cta">
              Explore Our Capabilities <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="about-panel">
            <div className="about-panel-accent" aria-hidden="true" />
            <div className="about-panel-grid">
              {capabilities.map((cap) => (
                <div key={cap.label} className="about-panel-item">
                  <cap.icon size={20} aria-hidden="true" />
                  <span>{cap.label.trim()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-serve-wrap">
          <div className="about-serve-strip">
            <span className="about-serve-eyebrow">Who We Serve</span>
            <div className="about-serve-items">
              {audiences.map((item) => (
                <span key={item.label} className="about-serve-item">
                  <item.icon size={18} aria-hidden="true" />
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
