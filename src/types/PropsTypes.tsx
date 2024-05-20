import { Pokemon } from "./Pokemon"

export type ButtonRouterProps = {
  endpoint: string,
  spanText: string,
}

export type CardProps = {
  pokemon: Pokemon,
}

export type DisplayProps = {
  pokemons: Pokemon[],
  isLoading: boolean,
  error: string,
}

export type NavbarProps = {
  endpoint: string
}

export type SearchBarProps = {
  onSearch: (filter: string) => void,
}

export type AccordionProps = {
  onFilter: (filter: string) => void,
}

export type SearchPanelProps = {
  onFilter: (filter: string) => void,
  handleAccordion: (filter: string) => void,
}

export type CardDescriptionProps = {
  pokemonId?: string
}

