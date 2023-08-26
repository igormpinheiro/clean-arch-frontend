import { IFichaCobrancaGateway } from '@/core/Domain/Gateway/ficha-cobranca.gateway'
import { FichaCobranca } from '@/core/Domain/Entities/FichaCobranca'
import { AxiosInstance } from 'axios'

export class FichaCobrancaHttpGateway implements IFichaCobrancaGateway {
  constructor(private http: AxiosInstance) {}

  async get(): Promise<FichaCobranca[]> {
    return this.http.get<FichaCobranca[]>('/ficha-cobranca').then((res) =>
      res.data.map((data) => {
        return new FichaCobranca(data.id, data.coCNARH, data.vlCobrancaAna)
      })
    )
  }

  async getById(id: number): Promise<FichaCobranca> {
    return this.http.get<FichaCobranca>('/ficha-cobranca/' + id).then((res) => {
      return new FichaCobranca(
        res.data.id,
        res.data.coCNARH,
        res.data.vlCobrancaAna
      )
    })
  }
}
