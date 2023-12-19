export type FilterOptions = {
  types: string[],
  color: string[],
  isBaby: boolean | undefined,
  weigthRange: WeigthRange,
}

type WeigthRange = {
  gte: number | undefined,
  lte: number | undefined
}