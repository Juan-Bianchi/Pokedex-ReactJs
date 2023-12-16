import { useGetPokemons } from "../hooks/useGetPokemons";
import Card from "./Card";


const Display = () => {
  const {pokemons, loadMessage, errorMsg} = useGetPokemons()
  
  return (
    <div>
        <div className={pokemons && 'flex flex-wrap justify-center content-center'}>
            {pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon}/>)}
        </div>
        <div className={loadMessage && 'flex justify-center content-center'}>
            <p>{loadMessage}</p>
        </div>
        <div className={errorMsg && 'flex justify-center content-center'}>
            <p>{errorMsg}</p>
        </div>
    </div>
  )
}

export default Display