import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import { Data } from "../types/Data";

export function useGetPokemons(){ 
  const [loadMessage, setLoadMessage] = useState<string>('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')

  const FILMS_QUERY = gql`
  query GetPokemon($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        type_id
        pokemon_v2_type {
          name
          id
        }
      }
    }
  }`;
  
  const { data, loading, error } = useQuery<Data>(FILMS_QUERY, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });
    
  useEffect(()=> {
    if (loading) setLoadMessage('Loading...');
    if (error) setErrorMsg(error.message)

    data && setPokemons(data.pokemon_v2_pokemon)
  }, [loading, error, pokemons])


  return {
    pokemons,
    loadMessage,
    errorMsg
  }
}
