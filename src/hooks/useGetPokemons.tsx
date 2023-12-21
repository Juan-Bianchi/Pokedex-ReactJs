import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import { Data } from "../types/Data";
import { FilterSetting } from "../types/FilterSetting";


export function useGetPokemons(name: string, filterOptions: FilterSetting, offset: number){ 
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')
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
    fetchPolicy: 'cache-and-network'
  });
    
  useEffect(()=> {
    setIsLoading(loading);
    if (error){
      setErrorMsg(error.message)
      console.log(error.message)
    } 
    if(data) {
      setPokemons(prevPokemons => [...prevPokemons, ...data.pokemon_v2_pokemon]);
    }
  }, [loading, error, filterOptions, offset])



  return {
    pokemons,
    isLoading,
    errorMsg
  }
}
