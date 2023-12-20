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
  onSearch: Function
}

export type AccordionProps = {
  onFilter: Function,
}

export type SearchPanelProps = {
  onFilter: Function,
}

export type CardDescriptionProps = {
  pokemonId?: string
}

