import { useCallback, useEffect, useState } from 'react'
import {
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
} from 'lucide-react'

const ORBIT_DURATION = 22
const DATA_ORBIT_DURATION = 12

const capabilities = [
  { icon: Monitor, label: 'Information Technology' },
  { icon: Network, label: 'IT Networking' },
  { icon: Code2, label: 'Software Development' },
  { icon: Server, label: 'IT Infrastructure' },
  { icon: Cloud, label: 'Cloud Solutions' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Puzzle, label: 'System Integration' },
  { icon: Headphones, label: 'Managed IT Services' },
  { icon: RefreshCw, label: 'Digital Transformation' },
  { icon: Bot, label: 'AI & Automation' },
  { icon: Lightbulb, label: 'IT Consulting' },
  { icon: Layers, label: 'Technology Solutions' },
]

const DATA_DOT_COUNT = 4

function initialSlotCaps(count) {
  return Array.from({ length: count }, (_, i) => i % capabilities.length)
}

export default function HeroVisual() {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [slotCount, setSlotCount] = useState(6)
  const [slotCaps, setSlotCaps] = useState(() => initialSlotCaps(6))

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReduceMotion(mq.matches)
    updateMotion()
    mq.addEventListener('change', updateMotion)
    return () => mq.removeEventListener('change', updateMotion)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const updateSlots = () => {
      const count = mq.matches ? 4 : 6
      setSlotCount(count)
      setSlotCaps(initialSlotCaps(count))
    }
    updateSlots()
    mq.addEventListener('change', updateSlots)
    return () => mq.removeEventListener('change', updateSlots)
  }, [])

  const handleOrbitComplete = useCallback(
    (slotIndex) => {
      setSlotCaps((prev) => {
        const next = [...prev]
        next[slotIndex] = (next[slotIndex] + slotCount) % capabilities.length
        return next
      })
    },
    [slotCount],
  )

  return (
    <div className={`hero-network${reduceMotion ? ' hero-network--static' : ''}`}>
      <svg className="hero-network-svg" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <radialGradient id="heroRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0E86EE" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0E86EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="400" fill="url(#heroRadial)" />

        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`gh${i}`}
            x1="20"
            y1={20 + i * 36}
            x2="380"
            y2={20 + i * 36}
            stroke="#0753C4"
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`gv${i}`}
            x1={20 + i * 36}
            y1="20"
            x2={20 + i * 36}
            y2="380"
            stroke="#0753C4"
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        ))}

        {/* Static orbit paths — do not rotate */}
        <circle
          cx="200"
          cy="200"
          r="128"
          fill="none"
          stroke="#0753C4"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="5 7"
        />
        <circle
          cx="200"
          cy="200"
          r="95"
          fill="none"
          stroke="#68CBFA"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      <div
        className={`hero-solar-system${reduceMotion ? ' hero-solar-system--static' : ''}`}
        aria-hidden="true"
      >
        {!reduceMotion &&
          Array.from({ length: DATA_DOT_COUNT }).map((_, i) => (
            <span
              key={`dot-${i}`}
              className="hero-data-dot"
              style={{
                '--orbit-delay': `${-(i * DATA_ORBIT_DURATION) / DATA_DOT_COUNT}s`,
                '--orbit-duration': `${DATA_ORBIT_DURATION}s`,
              }}
            />
          ))}

        {Array.from({ length: slotCount }).map((_, i) => {
          const cap = capabilities[slotCaps[i]]
          const Icon = cap.icon
          const phaseDelay = -(i * ORBIT_DURATION) / slotCount

          return (
            <div
              key={`planet-slot-${i}`}
              className="hero-planet"
              style={{
                '--orbit-delay': `${phaseDelay}s`,
                '--orbit-duration': `${ORBIT_DURATION}s`,
                '--static-distance': `${(i / slotCount) * 100}%`,
              }}
              onAnimationIteration={
                reduceMotion ? undefined : () => handleOrbitComplete(i)
              }
            >
              <span key={cap.label} className="hero-tech-label">
                <Icon size={13} aria-hidden="true" />
                <span className="hero-tech-label-text">{cap.label}</span>
              </span>
            </div>
          )
        })}
      </div>

      <div className="hero-network-center">
        <div className="hero-network-center-inner">
          <img
            src="/ZnLogoNew.png"
            alt=""
            width={48}
            height={36}
            decoding="async"
            fetchPriority="high"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
