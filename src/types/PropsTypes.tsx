import { Pokemon } from "./Pokemon";

export type ButtonRouterProps = {
  endpoint: string;
  spanText: string;
};

export type CardProps = {
  pokemon: Pokemon;
};

export type DisplayProps = {
  pokemons: Pokemon[];
  isLoading: boolean;
  error: string;
};

export type NavbarProps = {
  endpoint: string;
};

export type SearchBarProps = {
  onSearch: (filter: string) => void;
};

export type AccordionProps = {
  onFilter: (
    newColor: string | null,
    newTypes: string[],
    wgte: number | null,
    wlte: number | null,
    isABaby: boolean | null,
  ) => void;
};

export type SearchPanelProps = {
  onFilter: (
    newColor: string | null,
    newTypes: string[],
    wgte: number | null,
    wlte: number | null,
    isABaby: boolean | null,
  ) => void;
  handleAccordion: (filter: string | void) => void;
};

export type CardDescriptionProps = {
  pokemonId?: string;
};
