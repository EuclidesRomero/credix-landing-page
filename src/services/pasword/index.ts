import { CredixUserClient } from '../client'



export class PasswordService {
    
  private client: CredixUserClient;

  constructor(client: CredixUserClient) {
    this.client = client;
  }

  async validateResetToken(token: string): Promise<{ message: string, valid: boolean }> {
    try {
      return  await this.client.http.get<{ message: string, valid: boolean }>(`/api/owner/reset-password/${token}`);
    } catch (error) {
      console.error("Error validating reset token:", error);
      return { message: "Invalid or expired token", valid: false };
    }
  }


  async resetPassword(token: string, newPassword: string, passwordConfirm: string): Promise<{ msg: string }> {
    try {
      const response = await this.client.http.post<{ msg: string }>(`/api/owner/reset-password/${token}`, {
        password: newPassword,
        passwordConfirm: passwordConfirm,
      });
      console.log("Password reset successful:", response);
      return response;
    } catch (error) {
      console.error("Error resetting password:", error);
      return { msg: "Failed to reset password" };
    }
  }
}   