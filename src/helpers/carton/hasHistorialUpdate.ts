export function hasHistorialUpdate(
  fechaMonto: string,
  lastUpdate: string,
): boolean {
  const t0 = Date.parse(fechaMonto?.trim() ?? '')
  const t1 = Date.parse(lastUpdate?.trim() ?? '')
  if (!Number.isFinite(t0) || !Number.isFinite(t1)) return false
  return t0 !== t1
}
