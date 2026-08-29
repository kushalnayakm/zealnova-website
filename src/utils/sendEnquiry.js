import emailjs from '@emailjs/browser'

export const ENQUIRY_RECIPIENT = 'services@zealnova.in'

/**
 * Sends a contact enquiry to ZealNova via EmailJS.
 * Configure at https://www.emailjs.com — connect your email service and template.
 */
export async function sendEnquiry({ name, company, email, phone, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'The enquiry form is not configured yet. Please email us directly at services@zealnova.in.',
    )
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      to_email: ENQUIRY_RECIPIENT,
      reply_to: email,
      from_name: name,
      name,
      company: company.trim() || 'N/A',
      email,
      phone: phone.trim() || 'N/A',
      message,
      subject: `Website Enquiry from ${name}${company.trim() ? ` — ${company.trim()}` : ''}`,
    },
    { publicKey },
  )
}
