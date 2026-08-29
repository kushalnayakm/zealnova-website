/** Display-only contact address — do not use as the map embed query. */
export const OFFICE_ADDRESS =
  '#480, K. No. 862/480, 5 Singasandra, Bangalore 560068, Karnataka, India'

/**
 * Verified Google Maps locality for the embed (resolves cleanly to Singasandra).
 * The full postal address fails in Google Maps embed search.
 */
const MAP_LOCALITY_QUERY = 'Singasandra, Bengaluru, Karnataka 560068, India'

/**
 * Verified Google Maps place reference for Singasandra sublocality.
 * Returned by Google Maps embed for the locality above — not guessed coordinates.
 */
const SINGASANDRA_MAP_REFERENCE = '0x3bae14acd02d06af:0xc11f6d1c058b17af'

/** Opens Google Maps directions in a new tab with the exact office address. */
export function getDirectionsUrl() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ADDRESS)}`
}

/**
 * Google Maps Embed — place mode (single location, no directions panel).
 * Uses ZealNova Place ID when configured; otherwise verified Singasandra locality.
 */
export function getMapEmbedUrl() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const placeId = import.meta.env.VITE_GOOGLE_MAPS_PLACE_ID

  if (apiKey && placeId) {
    return buildEmbedApiUrl(apiKey, `place_id:${placeId}`, '16')
  }

  if (apiKey) {
    return buildEmbedApiUrl(apiKey, MAP_LOCALITY_QUERY, '15')
  }

  const params = new URLSearchParams({
    q: SINGASANDRA_MAP_REFERENCE,
    z: '15',
    hl: 'en',
    output: 'embed',
  })
  return `https://maps.google.com/maps?${params.toString()}`
}

function buildEmbedApiUrl(apiKey, query, zoom) {
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    zoom,
    maptype: 'roadmap',
    language: 'en',
  })
  return `https://www.google.com/maps/embed/v1/place?${params.toString()}`
}
