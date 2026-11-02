import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  deudaResponseToCartonProps,
  type CartonProps,
  type DeudaServiceResponse,
} from '../helpers/carton'
import { credixUserClient } from '../services'

export interface UseDebtShareResult {
  data: DeudaServiceResponse | null
  cartonProps: CartonProps
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useDebtShare(shareId: string | undefined): UseDebtShareResult {
  const [data, setData] = useState<DeudaServiceResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [requestKey, setRequestKey] = useState(0)

  const refetch = useCallback(() => {
    setRequestKey((k) => k + 1)
  }, [])

  useEffect(() => {
    const id = shareId?.trim()
    if (!id) {
      setData(null)
      setError('Falta el identificador del enlace compartido en la URL.')
      setIsLoading(false)
      return
    }

    const ac = new AbortController()
    setIsLoading(true)
    setError(null)
    setData(null)

    ;(async () => {
      try {
        const json = await credixUserClient.debtShare.getDebtShare(id, {
          signal: ac.signal,
        })
        if (ac.signal.aborted) return
        setData(json)
        setError(null)
      } catch (e) {
        if (ac.signal.aborted) return
        const msg =
          e instanceof Error ? e.message : 'Error de red al abrir el enlace.'
        setError(msg)
        setData(null)
      } finally {
        if (!ac.signal.aborted) setIsLoading(false)
      }
    })()

    return () => ac.abort()
  }, [shareId, requestKey])

  const cartonProps = useMemo(
    () => deudaResponseToCartonProps(data),
    [data],
  )

  return { data, cartonProps, isLoading, error, refetch }
}
