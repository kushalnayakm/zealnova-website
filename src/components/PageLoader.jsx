import './PageLoader.css'

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-busy="true">
      <div className="page-loader-inner">
        <img
          src="/ZnLogoNew.png"
          alt=""
          className="page-loader-logo"
          width={120}
          height={120}
          decoding="async"
          aria-hidden="true"
        />

        <div className="page-loader-network" aria-hidden="true">
          <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line className="page-loader-wire" x1="10" y1="20" x2="190" y2="20" />
            <circle className="page-loader-node" cx="20" cy="20" r="3.5" />
            <circle className="page-loader-node page-loader-node-mid" cx="100" cy="20" r="3.5" />
            <circle className="page-loader-node" cx="180" cy="20" r="3.5" />
            <circle className="page-loader-packet" cx="20" cy="20" r="2.5" />
          </svg>
        </div>

        <div className="page-loader-track" aria-hidden="true">
          <div className="page-loader-bar" />
        </div>

        <p className="page-loader-text">Loading ZealNova...</p>
      </div>
    </div>
  )
}
