export class FichaCobranca implements Entity {
  id: number
  coCNARH: number
  tpSituacaoCobranca: ETipoSituacaoCobranca
  vlCobrancaAna: number

  constructor(
    id: number,
    coCNARH: number,
    tpSituacaoCobranca: ETipoSituacaoCobranca,
    vlCobrancaAna: number
  ) {
    this.id = id
    this.coCNARH = coCNARH
    this.tpSituacaoCobranca = tpSituacaoCobranca
    this.vlCobrancaAna = vlCobrancaAna
  }
}
