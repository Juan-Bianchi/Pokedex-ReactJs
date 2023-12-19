import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import { Data } from "../types/Data";
import { FilterOptions } from "../types/FilterOptions";


export function useGetPokemons(name: string, filterOptions: FilterOptions){ 
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')

  const POKEMONS_QUERY = gql`
  query GetPokemon($limit: Int, $offset: Int, $name: String) {
    pokemon_v2_pokemon(where: {name: {_iregex: $name}, }, limit: $limit, offset: $offset) {
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
      limit: 10,
      offset: 0,
      name: name
    },
    fetchPolicy: "no-cache" 
  });
    
  useEffect(()=> {
    setIsLoading(loading);
    if (error) setErrorMsg(error.message)
    data && setPokemons(data.pokemon_v2_pokemon)
  }, [loading, error, pokemons])



  return {
    pokemons,
    isLoading,
    errorMsg
  }
}
