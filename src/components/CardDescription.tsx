import { useGetDescription } from "../hooks/useGetDescription"
import { CardDescriptionProps } from "../types/PropsTypes"
import ButtonRouter from "./ButtonRouter"
import Loader from "./Loader"

const CardDescription = ({pokemonId}: CardDescriptionProps)=> {

  const {pokemon, isLoading, errorMsg} = useGetDescription(Number(pokemonId))
  const finalImageLink: string = pokemon ? pokemon.pokemon_v2_pokemonsprites[0].sprites.other.dream_world?.front_default || pokemon.pokemon_v2_pokemonsprites[0].sprites.other["official-artwork"].front_default: '';

  

  return (
    <div className="w-[90%] md:w-[70%] flex justify-center">
        { errorMsg? 
        <div className="w-[50%]">
            <img src="/Error.png" alt="name" className=" aspect-square w-fit" />
        </div> 
        : isLoading?
        <Loader />
        : pokemon &&
        <div className="overflow-hidden flex flex-col justify-center items-center w-[90%] h-fit gap-7 bg-red-600 bg-opacity-50 rounded-2xl outline outline-slate-400 -outline-offset-8 p-1 py-4">
            <div className="flex flex-wrap gap-3">
                <div className="z-10 flex flex-wrap justify-center items-center gap-2 mb-3">
                    <p className={`text-[#363b81] text-center pragmatica-bold block drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-2 ${pokemon.name.length <= 17? 'text-4xl': pokemon.name.length <= 25? 'text-3xl': 'text-2xl'}`}>{pokemon.name.charAt(0).toUpperCase().concat(pokemon.name.slice(1))}</p>
                </div>
            </div> 
            <div className="w-[90%] flex flex-col md:flex-row justify-around items-center gap-3">
                <div className={`w-[55%] flex justify-between`}>
                    <img src={finalImageLink} alt="name" className="aspect-square w-[80%]" />
                    <div className={`flex flex-col flex-wrap justify-center items-start ms-3 relative gap-1 w-[150px] scale-100 start-0`}>
                        {pokemon.pokemon_v2_pokemontypes.map((pokeType) => 
                        <div className="iconBig rounded-full flex flex-col justify-center items-center" key={pokeType.pokemon_v2_type.id}>
                            <img key={pokeType.pokemon_v2_type.id} src={`/icons/${pokeType.pokemon_v2_type.name}.svg`} title={pokeType.pokemon_v2_type.name} className={`${pokeType.pokemon_v2_type.name} rounded-full`}></img>
                            <span className="pragmatica-bold text-[#363b81]">{pokeType.pokemon_v2_type.name.charAt(0).toUpperCase().concat(pokeType.pokemon_v2_type.name.slice(1))}</span>
                        </div> )
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-[#363b81] gap-3 text-2xl">
                    <div className='flex justify-between w-full'>
                        <h2 className="pragmatica-bold">Heigth: </h2>
                        <span>{pokemon.height} dm</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <h2 className="pragmatica-bold">Weight: </h2>
                        <span>{pokemon.weight} grs</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <h2 className="pragmatica-bold">Color: </h2>
                        <span>{pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name}</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <h2 className="pragmatica-bold">Is a baby: </h2>
                        <span>{pokemon.pokemon_v2_pokemonspecy.is_baby? ' Yes': ' No'}</span>
                    </div>
                    {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.filter(poke => poke.evolves_from_species_id === pokemon.id ).length === 0 ?  
                    <div className="w-full flex items-center justify-center mt-5">
                        <ButtonRouter endpoint={`/`} spanText='Home' />
                    </div>
                    :
                        <div className='flex flex-col items-between w-full gap-3'>
                            <h2 className="pragmatica-bold">Evolutions: </h2>
                            <div className="flex flex-col justify-around items-end gap-3">
                                {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.filter(poke => poke.evolves_from_species_id === pokemon.id ).map(poke => 
                                <div className="flex flex-col gap-3 justify-center items-center w-full" key={poke.id}>
                                    <ButtonRouter endpoint={`/description/${poke.id}`} spanText={poke.name.charAt(0).toUpperCase().concat(poke.name.slice(1))} />
                                </div>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        } 
    </div>
  )
}

export default CardDescription