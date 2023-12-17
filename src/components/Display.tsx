import { useEffect } from "react";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { DisplayProps } from "../types/DisplayProps";
import AdvancedSearch from "./AdvancedSearch";
import Card from "./Card";
import QueryError from "./QueryError";


const Display = ({handleLoading}: DisplayProps) => {
  const {pokemons, errorMsg} = useGetPokemons()

  const useLoader = ()=> {
    setTimeout(()=> {
      handleLoading();
    }, 1000)
  }

  useEffect(()=> {
    useLoader();
  })
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <AdvancedSearch />
      {errorMsg ?
        <div className={errorMsg && 'flex justify-center content-center'}>
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