import { gql, useQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import { Pokemon } from "../types/Pokemon";
import { Data } from "../types/Data";
import { FilterSetting } from "../types/FilterSetting";


export function useGetPokemons(name: string, filterOptions: FilterSetting){ 
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(0)
  const [filters, setFilters] = useState<FilterSetting>({
    color: null,
    types: [],
    wgte: null,
    wlte: null,
    isBaby: null
  })
  const [input, setInput] = useState('')
  const refElement = useRef(null)
  
  const KNOWN_TYPES = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']
  const KNOWN_COLORS = ['black', 'blue', 'brown', 'gray', 'green', 'pink', 'purple', 'red', 'white', 'yellow']

  const POKEMONS_QUERY = gql`
  query GetPokemon($offset: Int, $name: String, $color: [String], $isABaby: Boolean, $types: [String], $wgte: Int, $wlte: Int) {
    pokemon_v2_pokemon(where: {
      pokemon_v2_pokemonspecy: {
        pokemon_v2_pokemoncolor: {
          name: {_in: $color}
        } ${filterOptions.isBaby !== null? ', is_baby: {_eq: $isABaby}' : ''} 
      } , 
      ${name? 'name: {_iregex: $name},': ''} 
      pokemon_v2_pokemontypes: {
        pokemon_v2_type: {
          name: {_in: $types}
        }
      }, 
      weight: {_gte: $wgte, _lte: $wlte}
    },
    order_by: {id: asc}
    limit: 10, 
    offset: $offset ) {
      id
      name
      weight
      pokemon_v2_pokemonsprites {
        id
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonspecy {
        is_baby
        pokemon_v2_pokemoncolor {
          id
          name
        }
      }
    }
  }`;


  const { data, loading, error } = useQuery<Data>(POKEMONS_QUERY, {
    variables: {
      offset: offset,
      name: name,
      color: filterOptions.color? [filterOptions.color]: KNOWN_COLORS,
      isABaby: filterOptions.isBaby,
      types: filterOptions.types.length? filterOptions.types: KNOWN_TYPES,
      wgte: filterOptions.wgte || 0,
      wlte: filterOptions.wlte || 1000000
    },
    fetchPolicy: 'network-only'
  });

  function intersection(entries: any) {
    const firstEntry = entries[0]
    const observer = new IntersectionObserver(intersection)
    if(observer && refElement.current) {
      observer.observe(refElement.current)
    }

    if(firstEntry.isIntersecting && hasMore) {
      setOffset(prevOffset => prevOffset + 10)
    }
    observer && observer.disconnect()
  }
    
  useEffect(()=> {
    const observer = new IntersectionObserver(intersection)
    
    setIsLoading(loading);
    if (error){
      setErrorMsg(error.message)
      console.log(error.message)
    } 
    if(data) {
      if(data.pokemon_v2_pokemon.length < 10) {
        setHasMore(false)
      }

      if(filterOptions != filters) {
        setFilters(filterOptions)
        setOffset(0)
        setHasMore(true)
      }
      if(name !== input) {
        setInput(name)
        setOffset(0)
        setHasMore(true)
      }
      (offset)? setPokemons(prevPokemons => [...prevPokemons, ...data.pokemon_v2_pokemon]): setPokemons(data.pokemon_v2_pokemon);;
      
      if(observer && refElement.current) {
        observer.observe(refElement.current)
      }
    }
    return ()=> {
      observer && observer.disconnect()
    }
  }, [loading, error, data, filterOptions, offset])



  return {
    pokemons,
    isLoading,
    errorMsg,
    hasMore,
    refElement
  }
}
