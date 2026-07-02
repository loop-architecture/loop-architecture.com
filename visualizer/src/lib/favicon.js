// Favicon service URL for a domain (loaded lazily by the browser), matching
// looparch's favicon.py so diagrams look the same in the CLI and the editor.
const SERVICE = 'https://www.google.com/s2/favicons?sz=64&domain='

export function serviceUrl(domain) {
  return domain ? SERVICE + domain : null
}
