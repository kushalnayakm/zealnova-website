/** Display-only contact address — do not use as the map embed query. */
export const OFFICE_ADDRESS =
  '#480, K. No. 862/480, 5 Singasandra, Bangalore 560068, Karnataka, India'

/** Verified ZealNova office coordinates — hardcoded; never geocode the postal address. */
export const OFFICE_LAT = 12.8812393
export const OFFICE_LNG = 77.6373999

/** Exact Google Maps location for Get Directions. */
export const MAPS_LOCATION_URL =
  'https://maps.app.goo.gl/e1njYsXsfeqaNatV6?g_st=aw'

/** Opens the verified Google Maps location in a new tab. */
export function getDirectionsUrl() {
  return MAPS_LOCATION_URL
}

/**
 * Google Maps Embed centered on hardcoded office coordinates with a marker.
 * Does not search/geocode the postal address.
 */
export function getMapEmbedUrl() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const coords = `${OFFICE_LAT},${OFFICE_LNG}`

  if (apiKey) {
    const params = new URLSearchParams({
      key: apiKey,
      q: coords,
      zoom: '17',
      maptype: 'roadmap',
      language: 'en',
    })
    return `https://www.google.com/maps/embed/v1/place?${params.toString()}`
  }

  const params = new URLSearchParams({
    q: coords,
    z: '17',
    hl: 'en',
    output: 'embed',
  })
  return `https://maps.google.com/maps?${params.toString()}`
}
