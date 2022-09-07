export function parseHash() {
  return parseInt(window.location.hash.substring(1), 10)
}

export function ce(type, className = "") {
  return Object.assign(document.createElement(type), { className })
}
