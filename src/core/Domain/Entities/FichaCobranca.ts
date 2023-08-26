export class FichaCobranca implements Entity {
  id: number
  coCNARH: number
  tpSituacaoCobranca?: ETipoSituacaoCobranca
  vlCobrancaAna: number

  constructor(
    id: number,
    coCNARH: number,
    vlCobrancaAna: number,
    tpSituacaoCobranca?: ETipoSituacaoCobranca
  ) {
    this.id = id
    this.coCNARH = coCNARH
    this.vlCobrancaAna = vlCobrancaAna
    this.tpSituacaoCobranca = tpSituacaoCobranca
  }
}
