import { FichaCobranca } from '@/core/Domain/Entities/FichaCobranca'

export interface IFichaCobrancaRepository {
  get(): Promise<FichaCobranca[]>

  getById(id: number): Promise<FichaCobranca>
}
