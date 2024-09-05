import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { PokemonExtended } from "../types/Pokemon";
import { DataExtended } from "../types/Data";

export function useGetDescription(id: number) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonExtended | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const DESCRIPTION_QUERY = gql`
    query MyQuery($id: Int = 10) {
      pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
        id
        name
        height
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
          pokemon_v2_evolutionchain {
            id
            pokemon_v2_pokemonspecies {
              id
              name
              evolves_from_species_id
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery<DataExtended>(DESCRIPTION_QUERY, {
    variables: {
      id: id,
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    setIsLoading(loading);
    if (error) {
      setErrorMsg(error.message);
      console.log(error.message);
    }
    data && setPokemon(data.pokemon_v2_pokemon[0]);
  }, [loading, error, pokemon, data]);

  return {
    pokemon,
    isLoading,
    errorMsg,
  };
}
