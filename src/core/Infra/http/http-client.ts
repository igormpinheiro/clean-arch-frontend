import { HttpClientAbstract } from '@/core/Infra/http/http-client.abstract'

export class HttpClient implements HttpClientAbstract {
  constructor()

  delete<T>(url: string): Promise<T> {
    throw new Error('Method not implemented.')
  }

  get<T>(url: string): Promise<T> {
    return Promise.resolve(undefined)
  }

  post<T>(url: string, body: any): Promise<T> {
    return Promise.resolve(undefined)
  }

  put<T>(url: string, body: any): Promise<T> {
    return Promise.resolve(undefined)
  }
}
