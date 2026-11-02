export function formatDateEs(isoDate: string): string {
  const d = new Date(isoDate)
  if (Number.isNaN(d.getTime())) return '—'
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(d)
}

export function formatDateTimeEs(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

export function formatCartonHistorialDateTime(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  const dateParts = new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).formatToParts(d)
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    dateParts.find((p) => p.type === type)?.value ?? ''
  const monthRaw = pick('month')
  const month = monthRaw.replace(/\.$/, '')
  const dateChunk = `${pick('day')} ${month} ${pick('year')}`
  const timeChunk = new Intl.DateTimeFormat('es', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    hourCycle: 'h23',
  }).format(d)
  return `${dateChunk}, ${timeChunk}`
}

export function formatMontoNumerico(n: number): string {
  if (!Number.isFinite(n)) return '—'
  try {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(n)
  } catch {
    return `$${n.toLocaleString('es-CO')}`
  }
}

export function formatCartonHistorialMonto(
  montoVal: string | undefined,
  montoTexto: string | undefined,
): string {
  const v = montoVal?.trim()
  if (v) {
    const n = Number(v)
    if (Number.isFinite(n)) {
      return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
      }).format(Math.trunc(n))
    }
  }
  const raw = montoTexto?.trim()
  if (!raw) return '—'
  const stripped = raw.replace(/\.000\b/g, '').replace(/^\$\s*/, '').trim()
  return stripped || '—'
}
