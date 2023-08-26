import { IFichaCobrancaGateway } from '@/core/Domain/Gateway/ficha-cobranca.gateway'
import { FichaCobranca } from '@/core/Domain/Entities/FichaCobranca'

export class ProcessarCobrancaApplication {
  constructor(private readonly fichaCobrancaGateway: IFichaCobrancaGateway) {}

  async execute(): Promise<FichaCobranca[]> {
    return await this.fichaCobrancaGateway.get()
  }
}
