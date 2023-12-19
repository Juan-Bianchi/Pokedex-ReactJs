import Card from "./Card";
import QueryError from "./QueryError";
import { DisplayProps } from "../types/PropsTypes";


const Display = ({ pokemons, error }: DisplayProps) => {
  /*const [pokemonsToRender, setPokemonsToRender] = useState(pokemons)*/
  /*const onSearch = (pokemons: Pokemon[]) => {
    setPokemonsToRender(pokemons)
  }*/
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {error ?
        <div className={'flex justify-center content-center'}>
            <QueryError />
        </div> 
      :
        <div className={pokemons && 'flex flex-wrap justify-center content-center'}>
          {pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon}/>)}
        </div>
      }
    </div>
  )
}

export default Display