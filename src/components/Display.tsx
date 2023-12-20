import Card from "./Card";
import QueryError from "./QueryError";
import { DisplayProps } from "../types/PropsTypes";
import Loader from "./Loader";


const Display = ({ pokemons, error, isLoading }: DisplayProps) => {
 
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {error ?
        <div className={'flex justify-center content-center'}>
            <QueryError />
        </div> 
      : isLoading
      ?
        <Loader />
      :
        <div className={pokemons && 'flex flex-wrap justify-center content-center'}>
          {pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon}/>)}
        </div>
      }
    </div>
  )
}

export default Display