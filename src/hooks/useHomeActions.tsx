import { useState } from "react"
import { useGetPokemons } from "./useGetPokemons"
import { FilterOptions } from "../types/FilterOptions"

export function useHomeActions() {
  const [searchInput, setSearchInput] = useState('')
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    types: [],
    color: [],
    isBaby: undefined,
    weigthRange: {
      gte: undefined,
      lte: undefined
    },
  })

  const {pokemons, isLoading, errorMsg} = useGetPokemons(searchInput, filterOptions)

  function onSearch(input: string = searchInput) {
    setSearchInput(input)
  }

  function onFilter(newFilters: FilterOptions) {
    setFilterOptions(newFilters);
  }

  return {
    onSearch,
    onFilter,
    pokemons,
    errorMsg,
    isLoading
  }

}