import {
  get,
  post,
  patch,
  del as _delete,
  postMultipart,
  type HttpConfig,
} from '../lib/http_client'
import DebtShareService from './debt/debtShareService'
import EmailService from './email/emailService'
import  { PasswordService } from './pasword'

export interface HttpClient {
  get: typeof get
  post: typeof post
  patch: typeof patch
  delete: typeof _delete
  postMultipart: typeof postMultipart
}

export class CredixUserClient {
  private static instance: CredixUserClient
  http: HttpClient
  debtShare: DebtShareService
  email: EmailService 
  password: PasswordService
  publicApiBase: string

  constructor() {
    this.publicApiBase = this.initPublicApiBase()
    this.debtShare = new DebtShareService(this)
    this.email = new EmailService(this)
    this.password = new PasswordService(this)
    this.http = {
      get,
      post,
      patch,
      delete: _delete,
      postMultipart,
    }
  }

  private initPublicApiBase(): string {
    const v = import.meta.env.VITE_PUBLIC_API_BASE_URL
    return typeof v === 'string' && v.trim() ? v.replace(/\/$/, '') : ''
  }

  static getInstance(): CredixUserClient {
    if (!CredixUserClient.instance) {
      CredixUserClient.instance = new CredixUserClient()
    }
    return CredixUserClient.instance
  }
}

export const credixUserClient = CredixUserClient.getInstance()
