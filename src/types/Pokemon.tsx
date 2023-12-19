export type Pokemon = {
    id: string,
    name: string,
    weight: number,
    pokemon_v2_pokemonspecy: PokemonSpecy;
    pokemon_v2_pokemontypes: PokemonType[],
    pokemon_v2_pokemonsprites: PokemonSprite[],
}

type PokemonSprite = {
  sprites: string;
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
}

export type QueryPokemonType = {
    name: string;
    id: number;
}
