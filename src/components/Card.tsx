import { useState } from "react"
import { CardProps } from "../types/CardProps"
import ButtonRouter from "./ButtonRouter"
import { PokemonType } from "../types/Pokemon"

const Card = ({pokemon}: CardProps) => {
  const [isShown, setIsShown] = useState(false)
  const imageLink: SpriteType = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites);
  const finalImageLink: string = imageLink.other.dream_world? imageLink.other.dream_world.front_default: imageLink.other.home.front_shiny;

  const renderIconTypes = (pokeType: PokemonType)=> { 
    return  <div className="icon rounded-full" key={pokeType.pokemon_v2_type.id}>
              <img src={`/icons/${pokeType.pokemon_v2_type.name}.svg`} title={pokeType.pokemon_v2_type.name} className={`${pokeType.pokemon_v2_type.name} rounded-full`}></img>
            </div> 
  }

  return (
    <div className="w-[310px] flex justify-center" onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=> setIsShown(false)}>
        <div className="overflow-hidden transition-all flex flex-col justify-center items-center h-64 w-[90%] bg-red-600 bg-opacity-50 rounded-2xl outline outline-slate-400 -outline-offset-8 p-1 mx-2 my-2">
          <div className={`w-[60%] flex justify-between transition-all duration-500 ${isShown? 'scale-75': 'scale-100'}`}>
            <img src={finalImageLink} alt="name" className="aspect-square w-[90%]" />
            <div className={`flex flex-col flex-wrap justify-center items-start ms-3 duration-500 transition-all ease-linear relative gap-3 w-[150px] ${isShown? 'scale-100 start-0' : 'scale-0 start-50'}`}>
                {pokemon.pokemon_v2_pokemontypes.map((pokeType) => renderIconTypes(pokeType) )}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="z-10 flex flex-wrap justify-center items-center gap-2 mb-3">
              <p className="text-[#363b81] text-4xl font-bold block drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{pokemon.name.charAt(0).toUpperCase().concat(pokemon.name.slice(1))}</p>
            </div>
          </div> 
          <div className={`duration-500 transition-all relative start-5 ${isShown? 'h-full opacity-100' : 'opacity-0 h-0'}`}>
            <ButtonRouter endpoint="/description" spanText="Description" />
          </div>
        </div>
    </div>
  )
}

export default Card