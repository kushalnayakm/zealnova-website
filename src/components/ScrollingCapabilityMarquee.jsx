import {
  Monitor,
  Code2,
  Cloud,
  Shield,
  Network,
  Server,
  Puzzle,
  Headphones,
  RefreshCw,
  Bot,
  Lightbulb,
  Layers,
} from 'lucide-react'

const rowOne = [
  { icon: Monitor, label: 'Information Technology' },
  { icon: Code2, label: 'Software Development' },
  { icon: Cloud, label: 'Cloud Solutions' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Network, label: 'IT Networking' },
  { icon: Server, label: 'IT Infrastructure' },
]

const rowTwo = [
  { icon: Puzzle, label: 'System Integration' },
  { icon: Headphones, label: 'Managed IT Services' },
  { icon: RefreshCw, label: 'Digital Transformation' },
  { icon: Bot, label: 'AI & Automation' },
  { icon: Lightbulb, label: 'IT Consulting' },
  { icon: Layers, label: 'Technology Solutions' },
]

function MarqueeRow({ items, direction }) {
  return (
    <div className="capability-marquee-row">
      <div className={`capability-marquee-track capability-marquee-track--${direction}`}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="capability-marquee-group"
            aria-hidden={copy === 1 ? 'true' : undefined}
          >
            {items.map((item) => (
              <li key={`${copy}-${item.label}`} className="capability-marquee-chip">
                <item.icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function ScrollingCapabilityMarquee() {
  return (
    <section className="capability-marquee-section" aria-label="Technology capabilities">
      <MarqueeRow items={rowOne} direction="rtl" />
      <MarqueeRow items={rowTwo} direction="ltr" />
    </section>
  )
}
