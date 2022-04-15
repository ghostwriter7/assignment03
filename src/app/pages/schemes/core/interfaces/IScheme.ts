export interface IScheme {
  id: number,
  name: string,
  status: string,
  modifyBy: string,
  modifyDate: string,
  description: string | null,
  triggerdateLbman: boolean,
  triggerdateSvcscat: any,
  triggerdateItem: boolean,
  isinterimtrigger: boolean,
  constraintLbman: boolean,
  constraintSvcscat: boolean | null,
  constraintItem: boolean,
  purma: boolean,
  nntm: boolean,
  pdbtm: boolean,
  dsart: boolean,
  trigger: number | null,
  interimtrigger: any,
  constraint: any,
  lbmanEffectivedeadlineinfo: any,
  lbmanProcbasisref: any,
  editable: boolean
}
