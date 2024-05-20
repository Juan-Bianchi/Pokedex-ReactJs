export type Pokemon = {
    id: number,
    name: string,
    weight: number,
    pokemon_v2_pokemonspecy: PokemonSpecy;
    pokemon_v2_pokemontypes: PokemonType[],
    pokemon_v2_pokemonsprites: PokemonSprite[],
}

export type PokemonExtended = {
    id: number,
    name: string,
    height: number,
    weight: number,
    pokemon_v2_pokemonspecy: PokemonSpecyExtended;
    pokemon_v2_pokemontypes: PokemonType[],
    pokemon_v2_pokemonsprites: PokemonSprite[],
}

type PokemonSprite = {
  sprites: {
    other: {
        dream_world: {
          front_default: string
        },
        "official-artwork": {
          front_default: string
        }
      }
  }
};
  
export type PokemonType = {
  pokemon_v2_type: {
      name: string;
      id: number;
  }
};

export type PokemonColor = {
    name: string;
    id: number;
};

type PokemonSpecy = {
    is_baby: boolean,
    pokemon_v2_pokemoncolor: PokemonColor;
};

type PokemonSpecyExtended = {
    is_baby: boolean,
    pokemon_v2_pokemoncolor: PokemonColor;
    pokemon_v2_evolutionchain: PokemonEvolutionChain;
};

type PokemonEvolutionChain = {
    id: number,
    pokemon_v2_pokemonspecies: PokemonSpecies[];
};

type PokemonSpecies = {
    id: number
    name: string
    evolves_from_species_id: number
}

export type QueryPokemonType = {
    name: string;
    id: number;
}
