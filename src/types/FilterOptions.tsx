export type FilterOptions = {
  types: string[];
  color: string[];
  isBaby: boolean | null;
  weigthRange: WeigthRange;
};

type WeigthRange = {
  gte: number | null;
  lte: number | null;
};
