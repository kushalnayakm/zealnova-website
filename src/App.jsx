import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Suspense, lazy, useEffect, useLayoutEffect, useState, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

const RouteLoadingContext = createContext(null)

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageReady({ children }) {
  const setLoading = useContext(RouteLoadingContext)

  useLayoutEffect(() => {
    setLoading(false)
  }, [setLoading, children])

  return children
}

function SuspenseFallback() {
  const setLoading = useContext(RouteLoadingContext)

  useLayoutEffect(() => {
    setLoading(true)
  }, [setLoading])

  return null
}

function AppShell() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)
  const [trackedPath, setTrackedPath] = useState(pathname)

  if (pathname !== trackedPath) {
    setTrackedPath(pathname)
    setLoading(true)
  }

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <RouteLoadingContext.Provider value={setLoading}>
      <ScrollToTop />
      {loading && <PageLoader />}
      <Navbar />
      <main>
        <Suspense fallback={<SuspenseFallback />}>
          <Routes>
            <Route path="/" element={<PageReady><Home /></PageReady>} />
            <Route path="/about" element={<PageReady><About /></PageReady>} />
            <Route path="/services" element={<PageReady><Services /></PageReady>} />
            <Route path="/contact" element={<PageReady><Contact /></PageReady>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </RouteLoadingContext.Provider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
