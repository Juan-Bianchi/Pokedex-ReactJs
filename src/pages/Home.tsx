import Display from "../components/Display"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"
import Loader from "../components/Loader"
import { useHomeActions } from "../hooks/useHomeActions"
import SearchBar from "../components/SearchBar"
import Accordion from "../components/Accordion"
import { useGetPokemons } from "../hooks/useGetPokemons"
import { useEffect, useRef, useState } from "react"


const Home = () => {
  const {onSearch, onFilter, filterSettings, searchInput} = useHomeActions()
  const [loader, setLoader] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(0)
  const refElement = useRef(null)
  const {pokemons, isLoading, errorMsg} = useGetPokemons(searchInput, filterSettings, offset)

  function intersection(entries: any) {
    const firstEntry = entries[0]
    const observer = new IntersectionObserver(intersection)
    if(observer && refElement.current) {
      observer.observe(refElement.current)
    }

    if(pokemons.length > offset) {
      setHasMore(false)
    }

    console.log('has more', hasMore)

    if(firstEntry.isIntersecting && hasMore) {
      setOffset(prevOffset => prevOffset + 10)
      console.log(offset)
    }

    observer && observer.disconnect()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersection)
    if(observer && refElement.current) {
      observer.observe(refElement.current)
    }

    return ()=> {
      observer && observer.disconnect()
    }
  }, [offset]);
  
  return (
    <div className="w-full min-h-screen">
      <div className={`flex-col justify-between items-center gap-7 min-h-screen ${loader? 'hidden': 'flex'}`}>
        <Navbar endpoint="home"/>
        <div className="w-[90%]"><Welcome /></div>
        <div className="w-[85%] lg:w-[70%] flex flex-col justify-stretch items-center my-5 pragmatica bg-amber-500 rounded-md p-3 text-[#363b81] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h2 className="pragmatica-bold border-b-[3px] border-slate-400 w-full text-xl text-center pb-2">LETS CATCH 'EM ALL !!!</h2>
          <SearchBar onSearch={onSearch}/>
          <Accordion onFilter={onFilter}  />
        </div>
        <Display pokemons={pokemons} isLoading={isLoading} error={errorMsg} />
        {hasMore && <div ref={refElement} className="w-full"><Footer /></div>}
      </div>
      {loader && <div className="h-100vw flex justify-center content-center items-center align-middle"><Loader /></div>}
    </div>   
  )
}

export default Home