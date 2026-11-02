import type { DebtStatus } from './types'

export function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function mapEstadoToDebtStatus(estado: string): DebtStatus {
  const n = estado.trim().toLowerCase()
  if (n === 'pendiente') return 'pending'
  if (n === 'vencida') return 'overdue'
  if (n === 'pagada' || n === 'pagado') return 'paid'
  return 'pending'
}
