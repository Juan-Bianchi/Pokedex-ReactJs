import { useState } from "react"
import { FilterSetting } from "../types/FilterSetting"
import { useGetPokemons } from "./useGetPokemons"

export function useHomeActions() {
  const [searchInput, setSearchInput] = useState('')
  const [filterSettings, setfilterSettings] = useState<FilterSetting>({
    types:[],
    color: null,
    isBaby: null,
    wgte: null,
    wlte: null
  })
  const {pokemons, isLoading, errorMsg, hasMore, refElement} = useGetPokemons(searchInput, filterSettings)

  function onSearch(input: string = searchInput) {
    setSearchInput(input)
  }

  function onFilter (newColor: string | null, newTypes: string[], wgte: number | null, wlte: number | null, newIsABaby:boolean | null) {

    const updatedfilterSettings: FilterSetting = {
      color: newColor,
      types: [... newTypes],
      wgte: wgte,
      wlte: wlte,
      isBaby: newIsABaby
    }

    setfilterSettings(updatedfilterSettings)

  }

  return {
    onSearch,
    onFilter,
    pokemons,
    isLoading,
    errorMsg,
    hasMore,
    refElement
  }

}