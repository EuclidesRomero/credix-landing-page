export type DebtStatus = 'pending' | 'overdue' | 'paid'

export interface DeudaServiceResponse {
  cliente: {
    nombre: string
    identificacion: string
  }
  deuda: {
    estado: string
    monto_total: number
    monto_actual: number
    total_pagado: number
    credit_limit: number
  }
  fechas: {
    fecha_creacion: string
    fecha_vencimiento: string
  }
  historial: Array<{
    id_detalle_historial_deuda: string
    monto: string
    monto_val: string
    fecha_monto: string
    last_update: string
  }>
  negocio: {
    nombre: string
  }
}

export interface CartonTransaction {
  rowId?: string
  amountLabel: string
  amountDateLabel: string
  updatedAtLabel?: string
}

export interface CartonProps {
  customerName: string
  customerIdLabel: string
  avatarInitials?: string
  businessName?: string
  creditLimitLabel: string
  status: DebtStatus
  dueDateLabel: string
  createdDateLabel: string
  currentAmountLabel?: string
  totalPaidLabel?: string
  transactions: CartonTransaction[]
  downloadButtonLabel?: string
  onDownloadReceipt?: () => void
  bellButtonLabel?: string
  onBellClick?: () => void
  className?: string
}
