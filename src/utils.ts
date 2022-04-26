import jazzicon from '@metamask/jazzicon'

const encodeSvg = (element: SVGSVGElement) => {
  if (!element.firstChild) return ''
  const svgString = new XMLSerializer().serializeToString(element.firstChild)
  const encoded = window.btoa(svgString)
  return `data:image/svg+xml;base64,${encoded}`
}

const cache: Record<string, string> = {}
const DIAMETER = 46

export const createJazzIconAvatar = (address: string) => {
  if (cache[address]) return cache[address]

  const numberifyAddress = parseInt(address.slice(2, 10), 16)
  const svgElement = jazzicon(DIAMETER, numberifyAddress)
  cache[address] = encodeSvg(svgElement)
  return cache[address]
}
