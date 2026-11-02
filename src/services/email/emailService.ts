import { CredixUserClient } from '../client'

class EmailService {
  private client: CredixUserClient

  constructor(client: CredixUserClient) {
    this.client = client
  }

  async confirmEmail(
    token: string,
  ): Promise<{ message: string }> {
    return this.client.http.get<{ message: string }>(
      `/owner/confirm/${token}`,
      
    )
  }
}

export default EmailService 