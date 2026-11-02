import type { DebtStatus } from './types'

export const statusConfig: Record<
  DebtStatus,
  { label: string; className: string }
> = {
  pending: {
    label: 'Pendiente',
    className:
      'bg-amber-200/65 text-amber-950/75 ring-1 ring-amber-950/10',
  },
  overdue: {
    label: 'Vencida',
    className: 'bg-red-200/55 text-red-950/75 ring-1 ring-red-950/10',
  },
  paid: {
    label: 'Pagada',
    className:
      'bg-emerald-200/50 text-emerald-950/75 ring-1 ring-emerald-950/10',
  },
}
