
export interface TornpaperOptions {
  filterName?: string
  seed?: number
  grungeFrequency?: number
  grungeScale?: number
  tornFrequency?: number
  tornScale?: number
}

export class Tornpaper {
  filterName: string
  seed: number
  grungeFrequency: number
  grungeScale: number
  tornFrequency: number
  tornScale: number

  constructor(options: TornpaperOptions | null = null) {
    this.filterName = 'filter_tornpaper'
    this.seed = Math.floor(1e7 * Math.random())
    this.grungeFrequency = 0.03
    this.grungeScale = 3
    this.tornFrequency = 0.05
    this.tornScale = 10
    if (options) this.init(options)
    this.install()
  }

  init(options: TornpaperOptions): void {
    this.filterName = options.filterName ?? this.filterName
    if (options.seed !== undefined && options.seed !== null) this.seed = options.seed
    if (options.grungeScale !== undefined && options.grungeScale !== null)
      this.grungeScale = options.grungeScale
    if (options.grungeFrequency !== undefined && options.grungeFrequency !== null)
      this.grungeFrequency = options.grungeFrequency
    if (options.tornFrequency !== undefined && options.tornFrequency !== null)
      this.tornFrequency = options.tornFrequency
    if (options.tornScale !== undefined && options.tornScale !== null)
      this.tornScale = options.tornScale
  }

  install(): void {
    this.addHtml()
  }

  addHtml(): void {
    this.tornpaper()
  }

  tornpaper(): void {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('aria-hidden', 'true')
    svg.style.cssText = this.style()
    svg.innerHTML = `<filter id="${this.filterName}"><feTurbulence type="fractalNoise" baseFrequency="${this.grungeFrequency}" result="paper_noise" numOctaves="10" seed="${this.seed}" /><feDiffuseLighting in="paper_noise" lighting-color="white" surfaceScale="${this.grungeScale}" result="paper"><feDistantLight azimuth="45" elevation="60" /></feDiffuseLighting><feTurbulence baseFrequency="${this.tornFrequency}" type="turbulence" numOctaves="10" seed="${this.seed}" result="edge_noise" /><feGaussianBlur stdDeviation="0.5" in="SourceGraphic" /><feMorphology operator="erode" radius="5" /><feOffset dx="-2" dy="-2" /><feDisplacementMap scale="${this.tornScale}" xChannelSelector="B" yChannelSelector="G" in2="edge_noise" result="edge" /><feComposite in="paper" in2="edge" operator="atop" result="result_rough" /><feComposite in="SourceGraphic" in2="edge" operator="atop" result="result_sg" /><feBlend mode="multiply" in="result_rough" in2="result_sg" /></filter>`
    document.body.appendChild(svg)
  }

  style(): string {
    return 'position:fixed;top:0;left:0;width:0;height:0;z-index:-1;'
  }
}

export const CREDIX_TORN_FILTER_ID = 'filter_credix_tornpaper'

let credixFilterInstalled = false

export function ensureCredixTornPaperFilter(): string {
  if (typeof document === 'undefined') return CREDIX_TORN_FILTER_ID
  if (credixFilterInstalled || document.getElementById(CREDIX_TORN_FILTER_ID)) {
    credixFilterInstalled = true
    return CREDIX_TORN_FILTER_ID
  }
  credixFilterInstalled = true
  new Tornpaper({
    filterName: CREDIX_TORN_FILTER_ID,
    seed: 42,
    tornFrequency: 0.05,
    tornScale: 10,
    grungeFrequency: 0.03,
    grungeScale: 3,
  })
  return CREDIX_TORN_FILTER_ID
}
