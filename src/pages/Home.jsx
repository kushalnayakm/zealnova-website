import { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import ScrollingCapabilityMarquee from '../components/ScrollingCapabilityMarquee'

const WhyZealNova = lazy(() => import('../components/WhyZealNova'))
const TechCapabilities = lazy(() => import('../components/TechCapabilities'))
const CTA = lazy(() => import('../components/CTA'))

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingCapabilityMarquee />
      <Suspense fallback={null}>
        <WhyZealNova />
        <TechCapabilities />
        <CTA />
      </Suspense>
    </>
  )
}
