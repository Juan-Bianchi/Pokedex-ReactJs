import { useState } from "react"
import Display from "../components/Display"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"
import Loader from "../components/Loader"
import { useHomeActions } from "../hooks/useHomeActions"
import SearchBar from "../components/SearchBar"
import Accordion from "../components/Accordion"


const Home = () => {
  const {onSearch, onFilter, pokemons, isLoading, errorMsg} = useHomeActions()

  return (
    <div className="w-full">
      <div className={`flex-col justify-between items-center gap-7 min-h-screen ${isLoading? 'hidden': 'flex'}`}>
        <Navbar endpoint="home"/>
        <div className="w-[90%]"><Welcome /></div>
        <div className="w-[85%] lg:w-[70%] flex flex-col justify-stretch items-center my-5 pragmatica bg-amber-500 rounded-md p-3 text-[#363b81] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h2 className="pragmatica-bold border-b-[3px] border-slate-400 w-full text-xl text-center pb-2">LETS CATCH 'EM ALL !!!</h2>
          <SearchBar onSearch={onSearch}/>
          <Accordion onFilter={onFilter}  />
        </div>
        <Display pokemons={pokemons} isLoading={isLoading} error={errorMsg} />
        <Footer />
      </div>
      {(isLoading || !pokemons.length) && <Loader />}
    </div>   
  )
}

export default Home