import {
  formatCartonHistorialDateTime,
  formatCartonHistorialMonto,
  formatDateEs,
  formatMontoNumerico,
} from './format'
import { hasHistorialUpdate } from './hasHistorialUpdate'
import { mapEstadoToDebtStatus } from './estado'
import type {
  CartonProps,
  CartonTransaction,
  DeudaServiceResponse,
} from './types'

export function deudaResponseToCartonProps(
  data: Partial<DeudaServiceResponse> | null | undefined,
  options?: { onDownloadReceipt?: () => void },
): CartonProps {
  const cliente = data?.cliente
  const deuda = data?.deuda
  const fechas = data?.fechas
  const historial = data?.historial
  const negocio = data?.negocio

  const customerName = cliente?.nombre?.trim() || '—'
  const customerIdLabel = cliente?.identificacion?.trim() || '—'

  const creditLimitLabel =
    deuda?.credit_limit != null
      ? formatMontoNumerico(deuda.credit_limit)
      : '—'

  const status =
    deuda?.estado != null ? mapEstadoToDebtStatus(deuda.estado) : 'pending'

  const dueDateLabel = fechas?.fecha_vencimiento
    ? formatDateEs(fechas.fecha_vencimiento)
    : '—'
  const createdDateLabel = fechas?.fecha_creacion
    ? formatDateEs(fechas.fecha_creacion)
    : '—'

  const currentAmountLabel =
    deuda?.monto_actual != null
      ? formatMontoNumerico(deuda.monto_actual)
      : undefined
  const totalPaidLabel =
    deuda?.total_pagado != null
      ? formatMontoNumerico(deuda.total_pagado)
      : undefined

  const transactions: CartonTransaction[] = Array.isArray(historial)
    ? historial.map((row) => {
        const primary = row.fecha_monto
          ? formatCartonHistorialDateTime(row.fecha_monto)
          : '—'
        const secondary = row.last_update
          ? formatCartonHistorialDateTime(row.last_update)
          : '—'
        const instantsDiffer =
          row.fecha_monto &&
          row.last_update &&
          hasHistorialUpdate(row.fecha_monto, row.last_update)
        const showActualizado =
          instantsDiffer &&
          secondary !== '—' &&
          primary !== secondary
        return {
          rowId: row.id_detalle_historial_deuda,
          amountLabel: formatCartonHistorialMonto(row.monto_val, row.monto),
          amountDateLabel: primary,
          updatedAtLabel: showActualizado ? secondary : '—',
        }
      })
    : []

  const businessName = negocio?.nombre?.trim() || undefined

  return {
    customerName,
    customerIdLabel,
    businessName,
    creditLimitLabel,
    status,
    dueDateLabel,
    createdDateLabel,
    currentAmountLabel,
    totalPaidLabel,
    transactions,
    onDownloadReceipt: options?.onDownloadReceipt,
  }
}
