import {CredixUserClient}  from '../client'


class DebtShareService {
  private client: CredixUserClient

  constructor(client: CredixUserClient) {
    this.client = client
  }

  async getDebtShare(
    shareId: string,
    config?: { signal?: AbortSignal }
  ): Promise<{ message: string }> {
    return this.client.http.get<{message:string}>(
      `/api/public/debt-share/${encodeURIComponent(shareId)}`,
      undefined,
      {
        baseUrl: "https://api.credixapp.dev",
        signal: config?.signal,
      }
    )
  }
}

export default DebtShareService
