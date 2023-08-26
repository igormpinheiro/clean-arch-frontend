import { FichaCobranca } from '@/core/Domain/Entities/FichaCobranca'

export interface IFichaCobrancaGateway {
  get(): Promise<FichaCobranca[]>

  getById(id: number): Promise<FichaCobranca>
}
