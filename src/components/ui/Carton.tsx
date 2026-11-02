import { Bell, Download } from 'lucide-react'
import {
  initialsFromName,
  statusConfig,
  type CartonProps,
} from '../../helpers/carton'
import { CREDIX_TORN_FILTER_ID } from '../../vendor/tornpaper'

export type {
  CartonProps,
  CartonTransaction,
  DebtStatus,
  DeudaServiceResponse,
} from '../../helpers/carton'
export { deudaResponseToCartonProps } from '../../helpers/carton'

export function Carton({
  customerName,
  customerIdLabel,
  avatarInitials,
  businessName,
  creditLimitLabel,
  status,
  dueDateLabel,
  createdDateLabel,
  currentAmountLabel,
  totalPaidLabel,
  transactions,
  downloadButtonLabel = 'Descargar comprobante',
  onDownloadReceipt,
  bellButtonLabel = 'Notificaciones',
  onBellClick,
  className = '',
}: CartonProps) {
  const badge = statusConfig[status]
  const highlightDue = status === 'overdue'
  const showDownload = typeof onDownloadReceipt === 'function'
  const showBell = typeof onBellClick === 'function'

  const headerActionBase =
    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-900/12 bg-white transition-colors hover:bg-white/90 active:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900/25 disabled:pointer-events-none disabled:opacity-35'

  const tornPaperLayerClass =
    'carton-paper pointer-events-none absolute inset-0 border border-stone-800/18 shadow-[2px_3px_0_rgb(0_0_0_/0.05),inset_0_1px_0_rgb(255_255_255_/0.12)]'

  return (
    <article
      className={`relative flex min-h-0 w-full max-w-[360px] flex-1 flex-col overflow-hidden pb-[5px] ${className}`}
    >
      <div
        aria-hidden
        className={tornPaperLayerClass}
        style={{
          filter: `url(#${CREDIX_TORN_FILTER_ID})`,
          WebkitFilter: `url(#${CREDIX_TORN_FILTER_ID})`,
        }}
      />
      <div className="relative z-1 flex min-h-0 min-w-0 flex-1 flex-col">
        <header className="flex shrink-0 items-center justify-between border-b border-dashed border-stone-900/18 px-3 py-2.5">
          <div className="flex min-w-0 flex-1 items-center gap-2.5">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-300/75 text-xs font-semibold text-stone-600/90"
              aria-hidden
            >
              {avatarInitials ?? initialsFromName(customerName)}
            </div>
            <div className="min-w-0">
              {businessName ? (
                <span className="mb-0.5 block truncate text-[10px] font-normal uppercase tracking-wide text-white/85">
                  {businessName}
                </span>
              ) : null}
              <span className="block truncate text-[13px] font-medium leading-snug text-stone-900/88">
                {customerName}
              </span>
              <span className="block truncate text-[11px] leading-snug text-white/78">
                {customerIdLabel}
              </span>
            </div>
          </div>
          <div className="ml-1 flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={onBellClick}
              disabled={!showBell}
              className={`${headerActionBase} text-yellow-500 drop-shadow-[0_1px_2px_rgb(0_0_0_/0.28)]`}
              aria-label={bellButtonLabel}
              title={bellButtonLabel}
            >
              <Bell size={22} strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              onClick={onDownloadReceipt}
              disabled={!showDownload}
              className={`${headerActionBase} text-stone-700`}
              aria-label={downloadButtonLabel}
              title={downloadButtonLabel}
            >
              <Download size={22} strokeWidth={2} aria-hidden />
            </button>
          </div>
        </header>

        <section className="carton-paper-strip grid shrink-0 grid-cols-2 gap-x-3 gap-y-2.5 px-3 py-3">
          <div>
            <span className="mb-0.5 block text-[10px] font-normal uppercase tracking-wider text-white/82">
              Límite de crédito
            </span>
            <span className="block text-[13px] font-medium text-stone-900/88">
              {creditLimitLabel}
            </span>
          </div>
          <div>
            <span className="mb-0.5 block text-[10px] font-normal uppercase tracking-wider text-white/82">
              Estado
            </span>
            <span
              className={`inline-block rounded-sm px-1.5 py-0.5 text-[10px] font-medium ${badge.className}`}
            >
              {badge.label}
            </span>
          </div>
          <div>
            <span className="mb-0.5 block text-[10px] font-normal uppercase tracking-wider text-white/82">
              Fecha de creación
            </span>
            <span className="block text-[13px] font-medium text-stone-900/88">
              {createdDateLabel}
            </span>
          </div>
          <div>
            <span className="mb-0.5 block text-[10px] font-normal uppercase tracking-wider text-white/82">
              Fecha de vencimiento
            </span>
            <span
              className={`block text-[13px] font-medium ${
                highlightDue
                  ? 'text-red-950/78'
                  : 'text-stone-900/88'
              }`}
            >
              {dueDateLabel}
            </span>
          </div>
          {currentAmountLabel != null ? (
            <div>
              <span className="mb-0.5 block text-[10px] font-normal uppercase tracking-wider text-white/82">
                Monto actual
              </span>
              <span className="block text-[13px] font-medium text-stone-900/88">
                {currentAmountLabel}
              </span>
            </div>
          ) : null}
          {totalPaidLabel != null ? (
            <div>
              <span className="mb-0.5 block text-[10px] font-normal uppercase tracking-wider text-white/82">
                Total pagado
              </span>
              <span className="block text-[13px] font-medium text-stone-900/88">
                {totalPaidLabel}
              </span>
            </div>
          ) : null}
        </section>

        <section
          className="min-h-0 min-w-0 flex-1 basis-0 overflow-y-auto overscroll-y-contain px-3 pb-3 pt-1 [scrollbar-gutter:stable]"
          aria-label="Historial de movimientos"
        >
          <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-2 border-b border-dashed border-stone-900/18 pb-1 text-[9px] font-medium uppercase tracking-wide text-stone-900">
            <span>Valor</span>
            <span className="text-right">Creado</span>
            <span className="text-right">Actualizado</span>
          </div>
          <ul className="list-none">
            {transactions.map((tx, i) => (
              <li
                key={
                  tx.rowId ??
                  `${tx.amountLabel}-${tx.amountDateLabel}-${tx.updatedAtLabel ?? 'na'}-${i}`
                }
                className="grid grid-cols-[1.3fr_1fr_1fr] items-start gap-2 border-b border-dashed border-stone-900/14 py-1.5 last:border-b-0"
                aria-label={`Monto ${tx.amountLabel}, fecha monto ${tx.amountDateLabel}, fecha actualización ${tx.updatedAtLabel ?? '—'}`}
              >
                <span className="min-w-0 text-[0.95rem] font-bold leading-tight tracking-tight text-stone-900 tabular-nums">
                  {tx.amountLabel}
                </span>
                <span className="min-w-0 text-right text-[9px] leading-snug tracking-tight text-stone-900 tabular-nums wrap-anywhere">
                  {tx.amountDateLabel}
                </span>
                <span className="min-w-0 text-right text-[9px] leading-snug tracking-tight text-stone-900 tabular-nums wrap-anywhere">
                  {tx.updatedAtLabel ?? '—'}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
