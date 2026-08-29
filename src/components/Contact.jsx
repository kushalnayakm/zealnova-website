import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, ArrowRight, MapPin, X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import {
  getDirectionsUrl,
  getMapEmbedUrl,
} from '../utils/googleMaps'
import { sendEnquiry } from '../utils/sendEnquiry'

const COMPANY_EMAIL = 'services@zealnova.in'

const WHATSAPP_URL =
  'https://wa.me/918618026148?text=' +
  encodeURIComponent(
    'Hello ZealNova Technologies, I would like to know more about your technology services.',
  )

const DIRECTIONS_URL = getDirectionsUrl()
const MAP_EMBED_URL = getMapEmbedUrl()

const EMAIL_OPTIONS = [
  {
    id: 'gmail',
    label: 'Gmail',
    description: 'Open in Gmail web',
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_EMAIL}`,
    external: true,
  },
  {
    id: 'outlook',
    label: 'Outlook',
    description: 'Open in Outlook web',
    href: `https://outlook.live.com/mail/0/deeplink/compose?to=${COMPANY_EMAIL}`,
    external: true,
  },
  {
    id: 'apple',
    label: 'Apple Mail',
    description: 'Open in Mail app',
    href: `mailto:${COMPANY_EMAIL}`,
    external: false,
  },
  {
    id: 'default',
    label: 'Default Email App',
    description: 'Use your system email client',
    href: `mailto:${COMPANY_EMAIL}`,
    external: false,
  },
]
const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    const service = searchParams.get('service')
    if (service) {
      setForm((prev) => ({
        ...prev,
        message: prev.message || `I would like to enquire about ${service}.`,
      }))
    }
  }, [searchParams])

  useEffect(() => {
    if (!emailModalOpen) return undefined

    const handleEscape = (e) => {
      if (e.key === 'Escape') setEmailModalOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [emailModalOpen])

  const closeEmailModal = () => setEmailModalOpen(false)

  const handleEmailOption = (option) => {
    if (option.external) {
      window.open(option.href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = option.href
    }
    closeEmailModal()
  }

  const handleModalBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeEmailModal()
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (form.phone && !/^[\d\s+\-()]{7,20}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitted(false)

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    try {
      await sendEnquiry(form)
      setSubmitted(true)
      setForm(initialForm)
      setErrors({})
    } catch (error) {
      setSubmitError(
        error?.message ||
          'Unable to send your enquiry right now. Please try again or email us directly at services@zealnova.in.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <div className="contact-location-grid">
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-eyebrow">Contact</span>
            <h2 className="contact-heading">Let&apos;s Start a Conversation</h2>
            <p className="contact-intro">
              Reach out to ZealNova Technologies for software development, IT infrastructure,
              cloud, cybersecurity and digital transformation solutions.
            </p>

            <div className="contact-info-block">
              <h3>Location</h3>
              <p>
                #480, K. No. 862/480, 5 Singasandra<br />
                Bangalore 560068, Karnataka
              </p>
            </div>

            <div className="contact-info-block">
              <h3>Phone</h3>
              <a href="tel:+918618026148">8618026148</a>
            </div>

            <div className="contact-info-block">
              <h3>Email</h3>
              <a href="mailto:services@zealnova.in">services@zealnova.in</a>
            </div>

            <div className="contact-actions">
              <a href="tel:+918618026148" className="btn btn-primary">
                <Phone size={16} aria-hidden="true" /> Call Us
              </a>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setEmailModalOpen(true)}
              >
                <Mail size={16} aria-hidden="true" /> Email Us
              </button>
              <a
                href={WHATSAPP_URL}
                className="btn btn-outline contact-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with ZealNova on WhatsApp"
              >
                <WhatsAppIcon className="contact-whatsapp-icon" size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-map-col"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-map-wrapper">
              <iframe
                title="ZealNova Technologies office location on Google Maps"
                src={MAP_EMBED_URL}
                className="contact-map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline contact-directions-btn"
            >
              <MapPin size={16} aria-hidden="true" />
              Get Directions <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {submitted && (
            <div className="form-success" role="status">
              Thank you for contacting ZealNova Technologies. Your enquiry has been received.
              We will get back to you shortly.
            </div>
          )}

          {submitError && (
            <div className="form-submit-error" role="alert">
              {submitError}
            </div>
          )}

          <h3 className="contact-form-title">Send an Enquiry</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && <p id="phone-error" className="form-error">{errors.phone}</p>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Sending…' : <>Send Enquiry <ArrowRight size={16} aria-hidden="true" /></>}
          </button>
        </motion.form>
      </div>

      <AnimatePresence>
        {emailModalOpen && (
          <motion.div
            className="email-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleModalBackdropClick}
            role="presentation"
          >
            <motion.div
              ref={modalRef}
              className="email-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="email-modal-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="email-modal-header">
                <h3 id="email-modal-title">Email Us</h3>
                <button
                  type="button"
                  className="email-modal-close"
                  onClick={closeEmailModal}
                  aria-label="Close email options"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="email-modal-subtitle">Choose how you&apos;d like to email us</p>
              <p className="email-modal-recipient">{COMPANY_EMAIL}</p>

              <ul className="email-modal-options">
                {EMAIL_OPTIONS.map((option) => (
                  <li key={option.id}>
                    <button
                      type="button"
                      className="email-modal-option"
                      onClick={() => handleEmailOption(option)}
                    >
                      <span className={`email-modal-option-icon email-modal-option-icon--${option.id}`}>
                        {option.id === 'apple' ? (
                          <span className="email-apple-mark" aria-hidden="true" />
                        ) : (
                          <Mail size={18} aria-hidden="true" />
                        )}
                      </span>
                      <span className="email-modal-option-text">
                        <span className="email-modal-option-label">{option.label}</span>
                        <span className="email-modal-option-desc">{option.description}</span>
                      </span>
                      <ArrowRight size={16} className="email-modal-option-arrow" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
