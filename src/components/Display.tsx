import Card from "./Card";
import QueryError from "./QueryError";
import { DisplayProps } from "../types/PropsTypes";
import Loader from "./Loader";
import EmptyQuery from "./EmptyQuery";


const Display = ({ pokemons, error, isLoading }: DisplayProps) => {
 
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {error ?
        <div className={'flex justify-center content-center'}>
            <QueryError />
        </div> 
      : !pokemons.length ?
        <EmptyQuery />
      :
        <div className={pokemons && 'flex flex-wrap justify-center content-center'}>
          {pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon}/>)}
          {isLoading && <div className="w-full flex justify-center"><div className="w-[50%]"><Loader /></div></div>}
        </div>
      }
    </div>
  )
}

export default Display