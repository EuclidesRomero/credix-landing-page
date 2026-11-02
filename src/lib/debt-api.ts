import { get, type HttpConfig } from './http_client'
import type { DeudaServiceResponse } from '../helpers/carton'

function publicApiBase(): string {
  const v = import.meta.env.VITE_PUBLIC_API_BASE_URL
  return typeof v === 'string' && v.trim() ? v.replace(/\/$/, '') : ''
}

export const debtApi = {
  getDebtShare: async (
    shareId: string,
    config?: HttpConfig
  ): Promise<DeudaServiceResponse> => {
    const path = `/api/public/debt-share/${encodeURIComponent(shareId)}`
    const baseUrl = publicApiBase()
    return get<DeudaServiceResponse>(path, undefined, {
      ...config,
      baseUrl: baseUrl || config?.baseUrl,
    })
  },
}
