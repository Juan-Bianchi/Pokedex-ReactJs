export type Pokemon = {
    id: string,
    name: string,
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
