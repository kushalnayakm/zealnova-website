# ZealNova Technologies Website

Corporate website for **ZealNova Technologies Private Limited** — Bangalore-based IT services company.

**Website:** [zealnova.in](https://zealnova.in)  
**Email:** [services@zealnova.in](mailto:services@zealnova.in)

## Tech stack

- React 18
- Vite 6
- React Router
- Framer Motion
- Lucide React
- EmailJS (contact enquiry form)
- Google Maps Embed (contact map)

## Pages

- Home
- About Us
- Services
- Contact Us

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Environment variables

Copy the example file and fill in your keys:

```bash
cp .env.example .env
```

| Variable | Purpose |
| --- | --- |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps Embed API key |
| `VITE_GOOGLE_MAPS_PLACE_ID` | Optional Google Place ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |

See `.env.example` for EmailJS template setup notes.

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```
zealnova-website/
├── public/          # Static assets (logos, etc.)
├── src/
│   ├── components/  # UI sections and shared components
│   ├── pages/       # Route pages
│   └── utils/       # Maps + enquiry helpers
├── index.html
├── package.json
└── vite.config.js
```

## Contact

ZealNova Technologies Private Limited  
#480, K. No. 862/480, 5 Singasandra  
Bangalore 560068, Karnataka, India  
Phone: 8618026148
